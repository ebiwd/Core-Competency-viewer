import React, { useEffect, useState } from 'react';

import { withRouter, Link } from 'react-router-dom';
import { DomainTable } from '../domain-table/domain-table';
import parse from 'html-react-parser';
import { getTrainingResource } from '../../services/training/training';

type TrainingResource = import('../../models/training').TrainingResource;

export const Course = withRouter(({ match }) => {
  const [load, setLoad] = useState({
    course: null as TrainingResource | null,
    domains: [] as import('../../models/competency').CleanDomain[],
    found: true
  });

  function resetState() {
    setLoad({ course: null, domains: [], found: false });
  }
  useEffect(() => {
    getTrainingResource(match.params.course)
      .then(({ courses, domains }) => {
        resetState();
        if (courses.length > 0) {
          setLoad({ course: courses[0], domains: domains, found: true });
        }
      })
      .catch(error => resetState());
  }, [match.params.course]);

  const { found, course, domains } = load;

  if (!found) {
    return (
      <>
        <h2>
          <span className="fas exclamation-triangle"></span> Sorry, the
          requested training resource was not found!
        </h2>
        <Link to="/training">List of all training resources</Link>
      </>
    );
  }

  if (course === null) {
    return null;
  }

  if (course.archived === 'yes') {
    return (
      <>
        <h2>
          <span className="fas exclamation-triangle"></span> Sorry, the
          requested training resource has expired!
        </h2>
        <Link to="/training">List of all training resources</Link>
      </>
    );
  }

  const {
    title,
    description,
    target_audience,
    learning_outcomes,
    trainers,
    url,
    type
  } = course;
  return (
    <>
      <h1>{title}</h1>
      {description && parse(description)}

      <div>
        {url && (
          <div>
            <a style={{ borderBottom: 'dashed 1px' }} href={url}>
              External link to the training resource{' '}
            </a>{' '}
            <i className="fa fa-chevron-right"></i>
          </div>
        )}
        {type && (
          <div>
            <h2>Type of training</h2> {type}
          </div>
        )}
      </div>

      {target_audience && (
        <>
          <h2>Target Audience</h2>
          {parse(target_audience)}
        </>
      )}

      {learning_outcomes && (
        <>
          <h2>Learning Outcomes</h2>
          {parse(learning_outcomes)}
        </>
      )}

      {trainers && (
        <>
          <h2>Provider(s)</h2>
          {parse(trainers)}
        </>
      )}

      {course.competency_profile.length > 0 && (
        <>
          <h2>Competency profile</h2>
          <DomainTable domains={domains} />
        </>
      )}

      <br />

      <Link to="/training">List of all training resources</Link>
    </>
  );
});
