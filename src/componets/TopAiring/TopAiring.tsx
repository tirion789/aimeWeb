import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchTopAiringAnimes } from '../../redux/animeSlice/asyncAction';
import { topAiringAnimes } from '../../redux/animeSlice/selectors';
import { useAppDispatch } from '../../redux/store';
import styles from './TopAiring.module.scss';

const TopAiring = () => {
  const topAiringAnimesArray = useSelector(topAiringAnimes);

  const dispatch = useAppDispatch();

  const getFilms = () => {
    dispatch(fetchTopAiringAnimes());
  };

  useEffect(() => {
    getFilms();
  }, []);
  return (
    <div className={styles.TopAiring}>
      <h2 className={styles.TopAiring__title}>Top Airing</h2>
      <ul className={styles.TopAiring__titleList}>
        {topAiringAnimesArray.slice(0, 6).map((obj, index) => (
          <li key={index} className={styles.TopAiring__titleListItem}>
            <Link to={`/anime/${obj.animeId}`}>
              <img
                className={styles.TopAiring__image}
                width={257}
                height={400}
                src={obj.animeImg}
                alt=""
              />
            </Link>
            <div className={styles.TopAiring__container}>
              <h2 className={styles.TopAiring__titleListItemNames}>{obj.animeTitle}</h2>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TopAiring;
