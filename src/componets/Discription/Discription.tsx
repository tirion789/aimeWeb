import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../redux/store';
import styles from './Discription.module.scss';

const Discription = () => {
  const anime = useSelector((state: RootState) => state.anime.currentItem);
  const genresArray = anime?.genres.join(', ');
  const voicesArray = anime?.team.voice.join(', ');

  return (
    <div className={styles.Discription}>
      <div className={styles.Anime__discriptionAnimeTitle}>
        <h1>{anime?.names.en}</h1>
        <h2>{anime?.names.ru}</h2>
        <h2>東京リベンジャーズ</h2>
      </div>
      <div className={styles.Discription__info}>
        <dl className={styles.Discription__row}>
          <dt className={styles.Discription__rowFirstColumn}>Тип</dt>
          <dd className={styles.Discription__rowTwoColumn}>{anime?.type.string}</dd>
          <dt className={styles.Discription__rowFirstColumn}>Эпизоды</dt>
          <dd className={styles.Discription__rowTwoColumn}>{anime?.type.episodes}</dd>
          <dt className={styles.Discription__rowFirstColumn}>Статус</dt>
          <dd className={styles.Discription__rowTwoColumn}>{anime?.status.string}</dd>
          <dt className={styles.Discription__rowFirstColumn}>Жанр</dt>
          <dd className={styles.Discription__rowTwoColumn}>{genresArray}</dd>
          <dt className={styles.Discription__rowFirstColumn}>Анонс</dt>
          <dd className={styles.Discription__rowTwoColumn}>
            {!anime?.announce ? 'Анонсов нет' : anime.announce}
          </dd>
          <dt className={styles.Discription__rowFirstColumn}>Сезон</dt>
          <dd className={styles.Discription__rowTwoColumn}>
            {anime?.season.string} {anime?.season.year}
          </dd>
          <dt className={styles.Discription__rowFirstColumn}>Длительность</dt>
          <dd className={styles.Discription__rowTwoColumn}>{anime?.type.length}</dd>
          <dt className={styles.Discription__rowFirstColumn}>Озвучка</dt>
          <dd className={styles.Discription__rowTwoColumn}>{voicesArray}</dd>
        </dl>
      </div>
      <p className={styles.Discription__text}>{anime?.description}</p>
    </div>
  );
};

export default Discription;
