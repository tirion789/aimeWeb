import React from 'react';
import { Link } from 'react-router-dom';
import { FiltersListItemProps } from './interface';
import { ReactComponent as Star } from '../../../assets/images/icons/star.svg';
import styles from './FiltersListItem.module.scss';

const FiltersListItem = ({ image, title, totalEpisodes, rating, id }: FiltersListItemProps) => {
  return (
    <li className={styles.ListItem}>
      <Link to={`/anime/${id}`}>
        <img className={styles.Image} width={257} height={400} src={image} alt="imageAnime" />
        <div className={styles.TitleListContainer}>
          <h2 className={styles.TitleListItemNames}>{title.romaji}</h2>
          <div style={{ display: 'flex' }}>
            <p className={styles.Episodes}>
              {totalEpisodes ? 'Episodes: ' : 'Chapters: '}
              {totalEpisodes ? totalEpisodes : '?'}
            </p>
            <div style={{ marginLeft: 'auto' }}>
              <Star width={19} height={19} />
              <span style={{ marginLeft: '10px' }}>
                {String(rating ? rating : '')
                  .split('')
                  .join('.')}
              </span>
            </div>
          </div>
        </div>
      </Link>
    </li>
  );
};

export default FiltersListItem;
