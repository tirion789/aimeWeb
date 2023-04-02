import React, { ChangeEvent, useState } from 'react';
import { SelectProps } from './interface';
import styles from './Select.module.scss';

const Select = ({ setSeries, arraySeries, series, handleActiveSeriesClick }: SelectProps) => {
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
    setSeries((prev: string) => Number(prev) + 1);
  };

  const handleClickSetPrevSeries = () => {
    setSeries((prev: string) => Number(prev) - 1);
  };
  const filterArray = arraySeries.filter((number) => String(number).includes(filterSeries));
  return (
    <div className={styles.Select}>
      <div className={styles.Select__buttonsContainer}>
        <button
          className={styles.Select__buttons}
          disabled={series === '1'}
          onClick={handleClickSetPrevSeries}
          style={{ color: 'red' }}>
          prev series
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
          disabled={series === String(arraySeries.length)}
          onClick={handleClickSetNextSeries}
          style={{ color: 'red' }}>
          next series
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
            {filterArray.map((series) => (
              <li>
                <button
                  className={styles.Select__selectorButtons}
                  onClick={handleActiveSeriesClick}>
                  {series}
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
