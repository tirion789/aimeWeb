import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchPopularAnimes, fetchTopAiringAnimes } from '../../redux/animeSlice/asyncAction';
import {
  popularAnimes,
  statusPopular,
  statusTopAiring,
  topAiringAnimes,
} from '../../redux/animeSlice/selectors';
import { useAppDispatch } from '../../redux/store';
import Loader from '../Loader/Loader';
import styles from './MainCategories.module.scss';

const MainCategories = () => {
  const popularAnimesArray = useSelector(popularAnimes);
  const topAiringAnimesArray = useSelector(topAiringAnimes);
  const statusPopularAnimes = useSelector(statusPopular);
  const statusTopAiringAnimes = useSelector(statusTopAiring);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchTopAiringAnimes());
    dispatch(fetchPopularAnimes());
  }, [dispatch]);

  if (statusPopularAnimes === 'loading' || statusTopAiringAnimes === 'loading') {
    return <Loader />;
  }
  return (
    <div className={styles.MainCategories}>
      <div className={styles.MainCategories__container}>
        <div className={styles.MainCategories__headerContainer}>
          <h2 className={styles.MainCategories__title}>Most Popular</h2>
          <button className={styles.MainCategories__viewMore}>View more</button>
        </div>
        {statusPopularAnimes === 'error' ? (
          <p className={styles.MainCategories__error}>Server error</p>
        ) : (
          <ul className={styles.MainCategories__titleList}>
            {popularAnimesArray.slice(0, 6).map((obj, index) => (
              <li key={index} className={styles.MainCategories__titleListItem}>
                <Link to={`/anime/${obj.animeId}`}>
                  <img
                    className={styles.MainCategories__image}
                    width={257}
                    height={400}
                    src={obj.animeImg}
                    alt=""
                  />
                  <div className={styles.MainCategories__titleListContainer}>
                    <h2 className={styles.MainCategories__titleListItemNames}>{obj.animeTitle}</h2>
                  </div>
                </Link>
              </li>
            ))}
          </ul>
        )}
      </div>
      <div className={styles.MainCategories__container}>
        <div className={styles.MainCategories__headerContainer}>
          <h2 className={styles.MainCategories__title}>Top Airing</h2>
          <button className={styles.MainCategories__viewMore}>View more</button>
        </div>
        {statusTopAiringAnimes === 'error' ? (
          <p className={styles.MainCategories__error}>Server error</p>
        ) : (
          <ul className={styles.MainCategories__titleList}>
            {topAiringAnimesArray.slice(0, 6).map((obj, index) => (
              <li key={index} className={styles.MainCategories__titleListItem}>
                <Link to={`/anime/${obj.animeId}`}>
                  <img
                    className={styles.MainCategories__image}
                    width={257}
                    height={400}
                    src={obj.animeImg}
                    alt=""
                  />
                  <div className={styles.MainCategories__titleListContainer}>
                    <h2 className={styles.MainCategories__titleListItemNames}>{obj.animeTitle}</h2>
                  </div>
                </Link>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default MainCategories;
