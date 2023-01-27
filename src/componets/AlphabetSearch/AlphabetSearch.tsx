import React from 'react';
import { AlphabetArray } from '../../common/const';
import styles from './AlphabetSearch.module.scss';

const AlphabetSearch = () => {
  return (
    <div className={styles.AlphabetSearch}>
      <div>
        <h2>A-Z List</h2>
        <p>Searching anime order by alphabet name A to Z.</p>
        <ul className={styles.AlphabetSearch__list}>
          {AlphabetArray.map((latter) => (
            <a href="/">
              <li>{latter}</li>
            </a>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default AlphabetSearch;
