import React from 'react';
import styles from './Pagination.module.scss';
import { ReactComponent as Arrow } from '../../assets/images/icons/paginationArrow.svg';
import { PaginationProps } from './interface';

const Pagination = ({
  buttonsArray,
  currentPaginationButton,
  handleClickOnLastPage,
  firestIndexSlice,
  lastIndexSlice,
  handlePaginationClickPrev,
  handleClickOnFirstPage,
  handleClickPaginationButton,
  handlePaginationClickNext,
}: PaginationProps) => {
  const PREV = firestIndexSlice > 0 ? firestIndexSlice + 1 : firestIndexSlice;
  const VISIBLE = lastIndexSlice === buttonsArray.length - 1 ? lastIndexSlice + 1 : lastIndexSlice;
  const LAST_ELEMENT_OF_ARRAY = buttonsArray.length - 1;

  console.log(currentPaginationButton);

  return (
    <div className={styles.Pagination}>
      <button
        className={styles.ButtonSwapPage}
        disabled={firestIndexSlice === 0 && currentPaginationButton === 1}
        onClick={handlePaginationClickPrev}>
        <Arrow transform="rotate(180)" />
      </button>
      {firestIndexSlice !== 0 && (
        <>
          <button onClick={handleClickOnFirstPage} className={styles.ListItemInactiveButton}>
            1
          </button>
          <p className={styles.Ellipsis}>. . .</p>
        </>
      )}
      <ul className={styles.ListButton}>
        {buttonsArray.slice(PREV, VISIBLE).map((button, index) => (
          <li key={index}>
            <button
              className={
                button === currentPaginationButton
                  ? styles.ListItemButton
                  : styles.ListItemInactiveButton
              }
              onClick={() => handleClickPaginationButton(button)}>
              {button}
            </button>
          </li>
        ))}
      </ul>
      {lastIndexSlice !== buttonsArray.length - 1 && (
        <>
          <p className={styles.Ellipsis}>. . .</p>
          <button onClick={handleClickOnLastPage} className={styles.ListItemInactiveButton}>
            {buttonsArray.length}
          </button>
        </>
      )}
      <button
        className={styles.ButtonSwapPage}
        disabled={
          lastIndexSlice === LAST_ELEMENT_OF_ARRAY &&
          currentPaginationButton === buttonsArray.length
        }
        onClick={handlePaginationClickNext}>
        <Arrow />
      </button>
    </div>
  );
};

export default Pagination;
