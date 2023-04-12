import React from 'react';
import styles from './Relations.module.scss';
import { Link } from 'react-router-dom';
import { ReactComponent as Star } from '../../assets/images/icons/star.svg';
import { getNormalizeTitle } from '../../common/util';
import { RelationsProps } from './interface';

const Relations = ({ currentAnime }: RelationsProps) => {
  return (
    <div className={styles.Relations}>
      <div className={styles.Overlay}>
        <h1 className={styles.Header}>Relations</h1>
        <ul className={styles.List}>
          {currentAnime?.relations.map(
            ({ cover, id, rating, relationType, status, type, title }) => (
              <li className={`${styles.Item}`} style={{ backgroundImage: `url(${cover})` }}>
                <Link to={`/anime/${id}`}>
                  <div className={styles.ItemsBackground}>
                    <p>{title.romaji.toUpperCase()}</p>
                    <p>Status: {getNormalizeTitle(status)}</p>
                    <p>Type: {type}</p>
                    <p>Relation type: {getNormalizeTitle(relationType)}</p>
                    <div className={styles.Container}>
                      <p>Rating:</p>
                      <Star width={19} height={19} />
                      <span className={styles.Rating}>
                        {String(rating ? rating : '')
                          .split('')
                          .join('.')}
                      </span>
                    </div>
                  </div>
                </Link>
              </li>
            ),
          )}
        </ul>
      </div>
    </div>
  );
};

export default Relations;
