import React from 'react';
import styles from './Discription.module.scss';
import { DescriptionProps } from './interface';

const Discription = ({ currentAnime }: DescriptionProps) => {
  const genresArray = currentAnime?.genres.join(', ');

  return (
    <div className={styles.Discription}>
      <div className={styles.DiscriptionAnimeTitle}>
        <h1>{currentAnime?.title.romaji}</h1>
        <h2>{currentAnime?.title.native}</h2>
      </div>
      <div className={styles.Info}>
        <dl className={styles.Row}>
          <dt className={styles.RowFirstColumn}>Type</dt>
          <dd className={styles.RowTwoColumn}>{currentAnime?.type}</dd>
          <dt className={styles.RowFirstColumn}>
            {currentAnime?.type === 'MANGA' ? 'Chapters: ' : 'Episodes: '}
          </dt>
          <dd className={styles.RowTwoColumn}>
            {currentAnime?.totalEpisodes
              ? `${currentAnime.episodes.length} / ${currentAnime?.totalEpisodes}`
              : '?'}
          </dd>
          <dt className={styles.RowFirstColumn}>Status</dt>
          <dd className={styles.RowTwoColumn}>{currentAnime?.status}</dd>
          <dt className={styles.RowFirstColumn}>Genres</dt>
          <dd className={styles.RowTwoColumn}>{genresArray}</dd>
          <dt className={styles.RowFirstColumn}>Released Date</dt>
          <dd className={styles.RowTwoColumn}>{currentAnime?.releaseDate}</dd>
        </dl>
      </div>
      {currentAnime?.description && (
        <div
          className={styles.Text}
          dangerouslySetInnerHTML={{ __html: currentAnime?.description }}
        />
      )}
    </div>
  );
};

export default Discription;
