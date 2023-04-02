import React, { useEffect } from 'react';
import { fetchGenresAnime } from '../../redux/animeSlice/asyncAction';
import { genreTextSelector } from '../../redux/filterSlice/selectors';
import styles from './Pagination.module.scss';
import { ReactComponent as Arrow } from '../../assets/images/icons/paginationArrow.svg';
import { usePagination } from '../../hooks/usePagination';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';

const Pagination = () => {
  const dispatch = useAppDispatch();
  const genreText = useAppSelector(genreTextSelector);
  const buttonsArray = Array.from({ length: 12 }, (_, i = 1) => i + 1);
  const {
    handleClickOnFirstPage,
    handleClickOnLastPage,
    handlePaginationClickNext,
    handlePaginationClickPrev,
    handleClickPaginationButton,
    lastIndexSlice,
    firestIndexSlice,
    currentPaginationButton,
  } = usePagination(buttonsArray);
  const PREV = firestIndexSlice > 0 ? firestIndexSlice + 1 : firestIndexSlice;
  const VISIBLE = lastIndexSlice === buttonsArray.length - 1 ? lastIndexSlice + 1 : lastIndexSlice;

  useEffect(() => {
    dispatch(fetchGenresAnime({ genreText, currentPaginationButton }));
  }, [currentPaginationButton, dispatch, genreText]);

  return (
    <div className={styles.Pagination}>
      <button
        className={styles.Pagination__buttonSwapPage}
        disabled={firestIndexSlice === 0 && currentPaginationButton === 1}
        onClick={handlePaginationClickPrev}>
        <Arrow transform="rotate(180)" />
      </button>
      {firestIndexSlice !== 0 && (
        <>
          <button
            onClick={handleClickOnFirstPage}
            className={styles.Pagination__listItemInactiveButton}>
            1
          </button>
          <p style={{ paddingTop: '25px' }}>. . .</p>
        </>
      )}
      <ul className={styles.Pagination__listButton}>
        {buttonsArray.slice(PREV, VISIBLE).map((button, index) => (
          <li key={index}>
            <button
              className={
                button === currentPaginationButton
                  ? styles.Pagination__listItemButton
                  : styles.Pagination__listItemInactiveButton
              }
              onClick={() => handleClickPaginationButton(button)}>
              {button}
            </button>
          </li>
        ))}
      </ul>
      {lastIndexSlice !== buttonsArray.length - 1 && (
        <>
          <p style={{ paddingTop: '25px' }}>. . .</p>
          <button
            onClick={handleClickOnLastPage}
            className={styles.Pagination__listItemInactiveButton}>
            {buttonsArray.length}
          </button>
        </>
      )}
      <button
        className={styles.Pagination__buttonSwapPage}
        disabled={
          lastIndexSlice === buttonsArray.length - 1 &&
          currentPaginationButton === buttonsArray.length
        }
        onClick={handlePaginationClickNext}>
        <Arrow />
      </button>
    </div>
  );
};

export default Pagination;
