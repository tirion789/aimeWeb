import React from 'react';
import styles from './Discription.module.scss';
import { DescriptionProps } from './interface';

const Discription = ({ currentAnime }: DescriptionProps) => {
  const genresArray = currentAnime?.genres.join(', ');

  return (
    <div className={styles.Discription}>
      <div className={styles.Anime__discriptionAnimeTitle}>
        <h1>{currentAnime?.title.romaji}</h1>
        <h2>{currentAnime?.title.native}</h2>
      </div>
      <div className={styles.Discription__info}>
        <dl className={styles.Discription__row}>
          <dt className={styles.Discription__rowFirstColumn}>Type</dt>
          <dd className={styles.Discription__rowTwoColumn}>{currentAnime?.type}</dd>
          <dt className={styles.Discription__rowFirstColumn}>
            {!currentAnime?.totalEpisodes ? 'Chapters' : 'Episodes'}
          </dt>
          <dd className={styles.Discription__rowTwoColumn}>
            {currentAnime?.totalEpisodes ? currentAnime?.totalEpisodes : '?'}
          </dd>
          <dt className={styles.Discription__rowFirstColumn}>Status</dt>
          <dd className={styles.Discription__rowTwoColumn}>{currentAnime?.status}</dd>
          <dt className={styles.Discription__rowFirstColumn}>Genres</dt>
          <dd className={styles.Discription__rowTwoColumn}>{genresArray}</dd>
          <dt className={styles.Discription__rowFirstColumn}>Released Date</dt>
          <dd className={styles.Discription__rowTwoColumn}>{currentAnime?.releaseDate}</dd>
        </dl>
      </div>
      {currentAnime?.description && (
        <div
          className={styles.Discription__text}
          dangerouslySetInnerHTML={{ __html: currentAnime?.description }}
        />
      )}
    </div>
  );
};

export default Discription;
