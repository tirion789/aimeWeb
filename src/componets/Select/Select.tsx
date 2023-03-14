import React, { ChangeEvent, useState } from 'react';
import { ISelectProps } from './interface';
import styles from './Select.module.scss';

const Select: React.FC<ISelectProps> = ({ arraySeries, series, onActiveSeriesClick }) => {
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
  const filterArray = arraySeries.filter((number) => String(number).includes(filterSeries));
  return (
    <div className={styles.Select__buttonsContainer}>
      <button
        className={showSeriesSelector ? styles.Select__selectorOpen : styles.Select__selectorHidden}
        onClick={onClickShowSeries}>
        <span>{series}</span>
      </button>
      {showSeriesSelector && (
        <div className={styles.Select__container}>
          <input
            onChange={onActiveSeriesSearch}
            className={styles.Select__searchSeries}
            placeholder="Search"
            type="text"
          />
          <ul>
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
