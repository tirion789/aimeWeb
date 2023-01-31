import React from 'react';
import styles from './Preview.module.scss';
import R from '../../assets/images/icons/R.svg';
import HD from '../../assets/images/icons/4K.svg';
import DUB from '../../assets/images/icons/DUB.svg';
import SUB from '../../assets/images/icons/SUB.svg';

const Preview: React.FC = () => {
  const iconArray = [R, HD, DUB, SUB];
  return (
    <div className={styles.preview}>
      <p className={styles.preview__spotlight}>#1 Spotlight</p>
      <h1 className={styles.preview__title}>Tokyo Revengers: Christmas Showdown</h1>
      <div className={styles.preview__listContaier}>
        <ul className={styles.preview__iconList}>
          {iconArray.map((icon, index) => (
            <li key={index}>
              <img src={icon} alt="icon" />
            </li>
          ))}
        </ul>
        <ul className={styles.preview__seriesList}>
          <li className={styles.preview__seriesListItem}>TV</li>
          <li className={styles.preview__seriesListItem}>Ep 1 / ? </li>
          <li className={styles.preview__seriesListItem}>24m</li>
        </ul>
      </div>
      <p className={styles.preview__description}>
        Watching the news, Takemichi Hanagaki learns that his girlfriend from way back in middle
        school, Hinata Tachibana, has died. The only girlfriend he ever had was just killed by a
        villainous group known as the Tokyo Manji Gang. He lives in a crappy apartment with t...More
      </p>
      <div className={styles.preview__buttonsContainer}>
        <a href="/" className={styles.preview__buttonsContainer_watchLink}>
          Watch Now
        </a>
        <button className={styles.preview__buttonsContainer_addToList}>Add to list</button>
      </div>
    </div>
  );
};

export default Preview;
