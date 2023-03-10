import React from 'react';
import { useSelector } from 'react-redux';
import { currentItem } from '../../redux/animeSlice/selectors';
import styles from './Discription.module.scss';

const Discription = () => {
  const currentAnime = useSelector(currentItem);
  const genresArray = currentAnime?.genres.join(', ');

  return (
    <div className={styles.Discription}>
      <div className={styles.Anime__discriptionAnimeTitle}>
        <h1>{currentAnime?.animeTitle}</h1>
        <h2>{currentAnime?.otherNames}</h2>
      </div>
      <div className={styles.Discription__info}>
        <dl className={styles.Discription__row}>
          <dt className={styles.Discription__rowFirstColumn}>Type</dt>
          <dd className={styles.Discription__rowTwoColumn}>{currentAnime?.type}</dd>
          <dt className={styles.Discription__rowFirstColumn}>Episodes</dt>
          <dd className={styles.Discription__rowTwoColumn}>{currentAnime?.totalEpisodes}</dd>
          <dt className={styles.Discription__rowFirstColumn}>Status</dt>
          <dd className={styles.Discription__rowTwoColumn}>{currentAnime?.status}</dd>
          <dt className={styles.Discription__rowFirstColumn}>Genres</dt>
          <dd className={styles.Discription__rowTwoColumn}>{genresArray}</dd>
          <dt className={styles.Discription__rowFirstColumn}>Released Date</dt>
          <dd className={styles.Discription__rowTwoColumn}>{currentAnime?.releasedDate}</dd>
        </dl>
      </div>
      <p className={styles.Discription__text}>{currentAnime?.synopsis}</p>
    </div>
  );
};

export default Discription;
