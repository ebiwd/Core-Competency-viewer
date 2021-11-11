import React from 'react';

import styles from './filter.module.css';

type Props = {
  onChange(keyword: string): void;
};

export const Filter = React.memo(({ onChange }: Props) => (
  <form
    role="search"
    className={`search-form ${styles.FormLook}`}
    onSubmit={event => event.preventDefault()}
  >
    <input
      type="search"
      className="search-field"
      placeholder="Type to search"
      onKeyUp={event =>
        onChange(event.currentTarget.value.trim().toLowerCase())
      }
    />
  </form>
));
