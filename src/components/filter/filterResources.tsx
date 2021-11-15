import React from 'react';

import styles from './filter.module.css';

type Props = {
  setKeyword: Function;
};

export const FilterResources = React.memo(({ setKeyword }: Props) => {
  const handleSubmit = (e: any) => {
    e.preventDefault();
    console.log(e.currentTarget.search.value);
    setKeyword(e.currentTarget.search.value);
  };

  return (
    <form
      role="search"
      className={`search-form ${styles.FormLook}`}
      onSubmit={e => handleSubmit(e)}
    >
      <input
        type="search"
        className="search-field"
        placeholder="Type to search"
        name="search"
      />
      <input type="submit" className="search-submit" value="Search" />
    </form>
  );
});
