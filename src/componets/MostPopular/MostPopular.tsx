import React, { useEffect } from 'react';
import styles from './MostPopular.module.scss';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { popularAnimes } from '../../redux/animeSlice/selectors';
import { fetchPopularAnimes } from '../../redux/animeSlice/asyncAction';
import { useAppDispatch } from '../../redux/store';

const MostPopular = () => {
  const popularAnimesArray = useSelector(popularAnimes);

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchPopularAnimes());
  }, [dispatch]);
  return (
    <div className={styles.mostPopular}>
      <h2 className={styles.mostPopular__title}>Most Popular</h2>
      <ul className={styles.mostPopular__titleList}>
        {popularAnimesArray.slice(6, 12).map((obj, index) => (
          <li key={index} className={styles.mostPopular__titleListItem}>
            <Link to={`/anime/${obj.animeId}`}>
              <img
                className={styles.mostPopular__image}
                width={257}
                height={400}
                src={obj.animeImg}
                alt=""
              />
              <div className={styles.mostPopular__container}>
                <h2 className={styles.mostPopular__titleListItemNames}>{obj.animeTitle}</h2>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MostPopular;
