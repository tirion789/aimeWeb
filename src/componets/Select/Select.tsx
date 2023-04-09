import React, { ChangeEvent, useState } from 'react';
import { SelectProps } from './interface';
import styles from './Select.module.scss';
import { ReactComponent as Arrow } from '../../assets/images/icons/paginationArrow.svg';

const Select = ({
  setSeries,
  series,
  handleActiveSeriesClick,
  handleSwapNextSeries,
  handleSwapPrevSeries,
  currentAnime,
}: SelectProps) => {
  const SERIES = 1;
  const [showSeriesSelector, setShowSeriesSelector] = useState(false);
  const [filterSeries, setFilterSeries] = useState('');

  const handleClickShowSeries = () => {
    setShowSeriesSelector((prev) => !prev);
  };

  const handleActiveSeriesSearch = (event: ChangeEvent<HTMLInputElement>) => {
    const target = event.target as HTMLInputElement;
    const value = target.value;
    setFilterSeries(value);
  };

  const handleClickSetNextSeries = () => {
    setSeries((prev: string) => Number(prev) + SERIES);
    handleSwapNextSeries();
  };

  const handleClickSetPrevSeries = () => {
    setSeries((prev: string) => Number(prev) - SERIES);
    handleSwapPrevSeries();
  };

  const filterArray = currentAnime?.episodes.filter((obj) =>
    String(obj.number).includes(filterSeries),
  );

  return (
    <div className={styles.Select}>
      <div className={styles.Select__buttonsContainer}>
        <button
          className={styles.Select__buttons}
          disabled={Number(series) === SERIES}
          onClick={handleClickSetPrevSeries}>
          <Arrow transform="rotate(180)" />
        </button>
        <button
          className={
            showSeriesSelector ? styles.Select__selectorOpen : styles.Select__selectorHidden
          }
          onClick={handleClickShowSeries}>
          <span>{series}</span>
        </button>
        <button
          className={styles.Select__buttons}
          disabled={Number(series) === currentAnime?.episodes.length}
          onClick={handleClickSetNextSeries}>
          <Arrow />
        </button>
      </div>
      {showSeriesSelector && (
        <div className={`${styles.Select__container} scrollbar`}>
          <div className={styles.Select__inputContainer}>
            <input
              onChange={handleActiveSeriesSearch}
              className={styles.Select__searchSeries}
              placeholder="Search"
              type="text"
            />
          </div>
          <ul className={styles.Select__selectList}>
            {filterArray?.map(({ id, number }) => (
              <li>
                <button
                  className={styles.Select__selectorButtons}
                  onClick={() => handleActiveSeriesClick(number, id)}>
                  {number}
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Select;
