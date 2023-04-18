import React from 'react';
import styles from './SliderListItem.module.scss';
import { Link } from 'react-router-dom';
import { ReactComponent as Star } from '../../../assets/images/icons/star.svg';
import { SliderListItemProps } from './SliderListItemInterface';

const SliderListItem = ({
  id,
  image,
  title,
  type,
  totalEpisodes,
  episodes,
  rating,
  activeIndex,
}: SliderListItemProps) => {
  const WIDTH_BLOCK_OFFSET = 295;
  return (
    <li
      key={id}
      style={{ transform: `translateX(-${activeIndex * WIDTH_BLOCK_OFFSET}px)` }}
      className={styles.Item}>
      <Link to={`/anime/${id}`}>
        <img className={styles.Image} src={image} alt="" />
        <div className={styles.TitleListContainer}>
          <h2 className={styles.TitleListItemNames}>{title.romaji}</h2>
          <div style={{ display: 'flex' }}>
            <p className={styles.Episodes}>
              {type === 'MANGA' ? 'Chapters: ' : 'Episodes: '}
              {totalEpisodes || episodes ? totalEpisodes || episodes : '?'}
            </p>
            <div className={styles.Container}>
              <Star width={19} height={19} />
              <span className={styles.Rating}>
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

export default SliderListItem;
