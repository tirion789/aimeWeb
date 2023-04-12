import React from 'react';
import { AlphabetArray } from '../../common/const';
import styles from './AlphabetSearch.module.scss';
import AlphabeticalSearchListItem from './AlphabeticalSearchListItem/AlphabeticalSearchListItem';

const AlphabetSearch = () => {
  return (
    <div className={styles.AlphabetSearch}>
      <div className={styles.Container}>
        <p className={styles.Header}>A-Z List</p>
        <p className={styles.Title}>Searching anime order by alphabet name A to Z.</p>
      </div>
      <ul className={styles.List}>
        {AlphabetArray.map((latter, index) => (
          <AlphabeticalSearchListItem latter={latter} key={index} />
        ))}
      </ul>
    </div>
  );
};

export default AlphabetSearch;
