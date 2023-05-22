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
    setSeries((prev: number) => prev + SERIES);
    handleSwapNextSeries();
  };

  const handleClickSetPrevSeries = () => {
    setSeries((prev: number) => prev - SERIES);
    handleSwapPrevSeries();
  };

  const filterArray = currentAnime?.episodes
    .filter((obj) => String(obj.number).includes(filterSeries))
    .reverse();

  return (
    <div className={styles.Select}>
      <div className={styles.ButtonsContainer}>
        <button
          className={styles.Buttons}
          disabled={series === SERIES}
          onClick={handleClickSetPrevSeries}>
          <Arrow transform="rotate(180)" />
        </button>
        <button
          className={showSeriesSelector ? styles.SelectorOpen : styles.SelectorHidden}
          onClick={handleClickShowSeries}>
          <span>{series}</span>
        </button>
        <button
          className={styles.Buttons}
          disabled={series === currentAnime?.episodes.length}
          onClick={handleClickSetNextSeries}>
          <Arrow />
        </button>
      </div>
      {showSeriesSelector && (
        <div className={`${styles.Container} scrollbar`}>
          <div className={styles.InputContainer}>
            <input
              onChange={handleActiveSeriesSearch}
              className={styles.SearchSeries}
              placeholder="Search"
              type="text"
            />
          </div>
          <ul className={styles.SelectList}>
            {filterArray?.map(({ id, number }) => (
              <li>
                <button
                  className={styles.SelectorButtons}
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
