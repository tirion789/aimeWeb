import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { genresArray } from '../../common/const';
import { fetchRecentEpisodes } from '../../redux/animeSlice/asyncAction';
import { recent } from '../../redux/animeSlice/selectors';
import { useAppDispatch } from '../../redux/store';
import styles from './Upcoming.module.scss';

const Upcoming = () => {
  const recentEpisodes = useSelector(recent);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchRecentEpisodes());
  }, [dispatch]);

  return (
    <div className={styles.Upcoming}>
      <h2 className={styles.Upcoming__title}>Recent episodes</h2>
      <div className={styles.Upcoming__container}>
        {recentEpisodes.slice(1, 3).map(({ animeTitle, animeImg, episodeId }) => (
          <div key={episodeId} className={styles.Upcoming__container}>
            <div className={styles.Upcoming__imageContainer}>
              <img width={257} src={animeImg} alt="recent episodes" />
            </div>
            <div>
              <h3 className={styles.Upcoming__name}>{animeTitle}</h3>
              <ul className={styles.Upcoming__genresList}>
                {genresArray.map((string, index) => (
                  <li className={styles.Upcoming__genresListItem} key={index}>
                    {string}
                  </li>
                ))}
              </ul>
              <p className={styles.Upcoming__description}>
                A modern action adventure road story where a 17-year-old girl named Suzume helps a
                mysterious young man close doors from the outer side that are releasing disasters
                all over in Japan.
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Upcoming;
