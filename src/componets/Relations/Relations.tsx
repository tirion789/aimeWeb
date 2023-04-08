import React from 'react';
import styles from './Relations.module.scss';
import { useAppSelector } from '../../redux/hooks';
import { currentItemSelector } from '../../redux/animeSlice/selectors';
import { Link } from 'react-router-dom';
import { ReactComponent as Star } from '../../assets/images/icons/star.svg';
import { getNormalizeTitle } from '../../common/util';

const Relations = () => {
  const currentAnime = useAppSelector(currentItemSelector);

  return (
    <div className={styles.Relations}>
      <div className={styles.Relations__overlay}>
        <h1 className={styles.Relations__header}>Relations</h1>
        <ul className={styles.Relations__list}>
          {currentAnime?.relations.map(
            ({ cover, id, rating, relationType, status, type, title }) => (
              <li
                className={`${styles.Relations__item}`}
                style={{ backgroundImage: `url(${cover})` }}>
                <Link to={`/anime/${id}`}>
                  <div className={styles.Relations__itemsBackground}>
                    <h2>{title.romaji.toUpperCase()}</h2>
                    <p>Status: {getNormalizeTitle(status)}</p>
                    <p>Type: {type}</p>
                    <p>Relation type: {getNormalizeTitle(relationType)}</p>
                    <div style={{ marginLeft: 'auto', display: 'flex' }}>
                      <p>Rating:</p>
                      <Star width={19} height={19} />
                      <span style={{ marginLeft: '10px' }}>
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
