import React from 'react';
import { AlphabetArray } from '../../common/const';
import styles from './AlphabetSearch.module.scss';
import AlphabeticalSearchListItem from './AlphabeticalSearchListItem/AlphabeticalSearchListItem';

const AlphabetSearch = () => {
  return (
    <div className={styles.AlphabetSearch}>
      <div>
        <div className={styles.AlphabetSearch__container}>
          <h2 className={styles.AlphabetSearch__header}>A-Z List</h2>
          <p className={styles.AlphabetSearch__title}>
            Searching anime order by alphabet name A to Z.
          </p>
        </div>
        <ul className={styles.AlphabetSearch__list}>
          {AlphabetArray.map((latter, index) => (
            <AlphabeticalSearchListItem latter={latter} key={index} />
          ))}
        </ul>
      </div>
    </div>
  );
};

export default AlphabetSearch;
