import React from 'react';
import { titleArray, TopAiringArray } from '../../common/const';
import styles from './Recommended.module.scss';

const Recommended: React.FC = () => {
  return (
    <div className={styles.Recommended}>
      <div className={styles.Recommended__overlay}>
        <div className={styles.mostPopular}>
          <h2 className={styles.mostPopular__title}>Most Popular</h2>
          <ul className={styles.mostPopular__titleList}>
            {titleArray.map((obj) => (
              <li>
                <img width={257} height={400} src={obj.imageUrl} alt="" />
                <div className={styles.mostPopular__container}>
                  <span>01</span>
                  <h2>{obj.title}</h2>
                </div>
              </li>
            ))}
          </ul>
        </div>
        <div className={styles.mostPopular}>
          <h2 className={styles.mostPopular__title}>Top Airing</h2>
          <ul className={styles.mostPopular__titleList}>
            {TopAiringArray.map((obj) => (
              <li>
                <img
                  className={styles.mostPopular__image}
                  width={257}
                  height={400}
                  src={obj.imageUrl}
                  alt=""
                />
                <div className={styles.mostPopular__container}>
                  <span>01</span>
                  <h2>{obj.title}</h2>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Recommended;
