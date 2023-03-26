import React, { ChangeEvent, useState } from 'react';
import { ISelectProps } from './interface';
import styles from './Select.module.scss';

const Select: React.FC<ISelectProps> = ({
  setSeries,
  arraySeries,
  series,
  onActiveSeriesClick,
}) => {
  const [showSeriesSelector, setShowSeriesSelector] = useState(false);
  const [filterSeries, setFilterSeries] = useState('');

  const onClickShowSeries = () => {
    setShowSeriesSelector((prev) => !prev);
  };

  const onActiveSeriesSearch = (event: ChangeEvent<HTMLInputElement>) => {
    const target = event.target as HTMLInputElement;
    const value = target.value;
    setFilterSeries(value);
  };

  console.log(series);

  const onClickSetNextSeries = () => {
    setSeries((prev: string) => Number(prev) + 1);
  };

  const onClickSetPrevSeries = () => {
    setSeries((prev: string) => Number(prev) - 1);
  };
  const filterArray = arraySeries.filter((number) => String(number).includes(filterSeries));
  return (
    <div className={styles.Select}>
      <div className={styles.Select__buttonsContainer}>
        <button
          className={styles.Select__buttons}
          disabled={series === '1'}
          onClick={onClickSetPrevSeries}
          style={{ color: 'red' }}>
          prev series
        </button>
        <button
          className={
            showSeriesSelector ? styles.Select__selectorOpen : styles.Select__selectorHidden
          }
          onClick={onClickShowSeries}>
          <span>{series}</span>
        </button>
        <button
          className={styles.Select__buttons}
          disabled={series === String(arraySeries.length)}
          onClick={onClickSetNextSeries}
          style={{ color: 'red' }}>
          next series
        </button>
      </div>
      {showSeriesSelector && (
        <div className={`${styles.Select__container} scrollbar`}>
          <div className={styles.Select__inputContainer}>
            <input
              onChange={onActiveSeriesSearch}
              className={styles.Select__searchSeries}
              placeholder="Search"
              type="text"
            />
          </div>
          <ul className={styles.Select__selectList}>
            {filterArray.map((series) => (
              <li>
                <button className={styles.Select__selectorButtons} onClick={onActiveSeriesClick}>
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
