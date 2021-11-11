import React, { useEffect, useState } from 'react';

import { PrefaceTraining } from '../preface-training/preface-training';
import { Filter } from '../filter/filter';
import { TableCourses } from '../table-courses/table-courses';
import { Select } from '../select/select';
import Pagination from '../Pagination';
import styles from './training-resources.module.css';
import { getTrainingResources } from '../../services/training/training';
import { type } from 'os';

type TrainingResource = import('../../models/training').TrainingResource;

type Props = {
  courses: TrainingResource[];
};

// export const TrainingResources = ({ courses }: Props) => {
export const TrainingResources = (Props: any) => {
  const [courses, setCourses] = useState<
    import('../../models/training').TrainingResource[]
  >([]);
  const [filteredCourses, setFilteredCourses] = useState(courses);
  const [keyword, setKeyword] = useState('');
  const [options, setOptions] = useState([] as string[]);
  const [topic, setTopic] = useState('');
  // const [kindOptions, setKindOptions] = useState([] as string[]);
  const [kind, setKind] = useState('');
  const [pageNumber, setPageNumber] = useState<number>(1);

  const kindOptions = ['Type', 'Online', 'Face-to-Face'];

  function unique(words: string[]): string[] {
    // return [...new Set(words)];
    // return [...words.reduce((myMap, word) => myMap.set(word, null), new Map<string, null>()).keys()];
    return Object.keys(
      words.reduce(
        (uniqueWords, word) => ({ ...uniqueWords, [word]: null }),
        {} as Record<string, null>
      )
    );
  }

  useEffect(() => {
    const fetchTraining = async () => {
      const newCourses = await getTrainingResources(pageNumber, kind, keyword);
      setCourses(newCourses);
    };

    Promise.all([fetchTraining()]);
  }, [pageNumber, kind, keyword]);

  useEffect(() => {
    setFilteredCourses(courses);
    const topics = courses.reduce(
      (keywords, course) =>
        course.keywords
          ? [...keywords, ...course.keywords.split(', ')]
          : keywords,
      [] as string[]
    );
    setOptions(['Topic', ...unique(topics)]);
    // const kinds = courses.reduce(
    //   (keywords, course) => [...keywords, course.type],
    //   [] as string[]
    // );
    // setKindOptions(['Type', ...unique(kinds)]);
  }, [courses]);

  // useEffect(() => {
  //   setFilteredCourses(
  //     courses.filter(course => {
  //       const keywords = course.keywords || '';
  //       return (
  //         keywords.includes(topic) &&
  //         course.type.includes(kind) &&
  //         course.allNoCase.includes(keyword)
  //       );
  //     })
  //   );
  // }, [keyword, topic, kind, courses]);

  const changePageNumber = (page: number) => {
    setPageNumber(page);
    console.log(page);
  };

  return (
    <>
      <PrefaceTraining />

      <Filter onChange={setKeyword} />

      <div className={styles.LowerSpace}>
        <span className={styles.RightSpace}>Or filter by:</span>

        <Select
          options={options}
          className={styles.RightSpace}
          onChange={setTopic}
        />

        <Select options={kindOptions} onChange={setKind} />
      </div>

      <TableCourses courses={filteredCourses} />
      <Pagination
        hitcount={filteredCourses[0] ? filteredCourses[0].hitcount : 0}
        pageNumber={pageNumber}
        changePageNumber={changePageNumber}
      />
    </>
  );
};
