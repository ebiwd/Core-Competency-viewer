import React from 'react';

export type Props = {
  hitcount: any;
  pageNumber: number;
  changePageNumber: Function;
};

const Pagination: React.FC<Props> = ({
  hitcount,
  pageNumber,
  changePageNumber
}) => {
  let count = Math.ceil(hitcount / 15);
  const createTable = () => {
    let ul = [];
    let children = [];
    for (let i = 1; i <= count; i++) {
      children.push(
        <li
          key={i}
          className="vf-pagination__item vf-pagination__item--previous-page"
        >
          <a
            href="#"
            className="vf-pagination__link"
            onClick={e => changePageNumber(i)}
          >
            {i}
          </a>
        </li>
      );
    }
    ul.push(children);
    return ul;
  };

  return (
    <nav className="vf-pagination" aria-label="Pagination">
      <ul className="vf-pagination__list">
        <li
          key="previous"
          className="vf-pagination__item vf-pagination__item--previous-page"
        >
          <a
            href="#"
            className="vf-pagination__link"
            style={{ pointerEvents: pageNumber === 1 ? 'none' : 'all' }}
            onClick={e => changePageNumber(pageNumber - 1)}
          >
            Previous
          </a>
        </li>
        {createTable()}
        <li
          key="next"
          className="vf-pagination__item vf-pagination__item--next-page"
        >
          <a
            href="#"
            className="vf-pagination__link"
            style={{ pointerEvents: pageNumber === count ? 'none' : 'all' }}
            onClick={e => changePageNumber(pageNumber + 1)}
          >
            Next
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Pagination;
