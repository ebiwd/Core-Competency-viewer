import React from 'react';

import { withRouter } from 'react-router-dom';

import styles from './header.module.css';

export const Header = withRouter(({ location, history }) => {
  const showKrc = location.pathname.startsWith('/training');
  const showCompetencies = location.pathname.startsWith('/competencies');
  const showProfiles = location.pathname.startsWith('/profiles');

  let showTab = '';

  if (location.pathname.startsWith('/training')) {
    showTab = 'training';
  }

  if (location.pathname.startsWith('/competencies')) {
    showTab = 'competencies';
  }

  if (location.pathname.startsWith('/career-profiles')) {
    showTab = 'career-profiles';
  }

  return (
    <header className="page-entry-header">
      <div>
        <h1>Knowledge Resource Center</h1>
      </div>
      <h1
        className={`page-entry-title entry-title ${styles.Tab} ${
          showTab === 'training' ? '' : styles.Inactive
        }`}
        onClick={() => history.push('/training')}
      >
        Training Resources
      </h1>{' '}
      <h1
        className={`page-entry-title entry-title ${styles.Tab} ${
          showTab === 'competencies' ? '' : styles.Inactive
        }`}
        onClick={() => history.push('/competencies')}
      >
        Core Competencies
      </h1>{' '}
      <h1
        className={`page-entry-title entry-title ${styles.Tab} ${
          showTab === 'career-profiles' ? '' : styles.Inactive
        }`}
        onClick={() => history.push('/career-profiles')}
      >
        Career Profiles
      </h1>
    </header>
  );
});
