import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { fetchPopularAnimes, fetchTopAiringAnimes } from '../../redux/animeSlice/asyncAction';
import Loader from '../Loader/Loader';
import { MainCategoriesProps } from './interface';
import styles from './MainCategories.module.scss';
import { useAppDispatch } from '../../redux/hooks';

const MainCategories = ({ items, status, name }: MainCategoriesProps) => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchTopAiringAnimes());
    dispatch(fetchPopularAnimes());
  }, [dispatch]);

  if (status === 'loading') {
    return <Loader />;
  }
  return (
    <div className={styles.MainCategories}>
      <div className={styles.MainCategories__container}>
        <div className={styles.MainCategories__headerContainer}>
          <h2 className={styles.MainCategories__title}>{name}</h2>
          <button className={styles.MainCategories__viewMore}>View more</button>
        </div>
        {status === 'error' ? (
          <p className={styles.MainCategories__error}>Server error</p>
        ) : (
          <ul className={styles.MainCategories__titleList}>
            {items.slice(0, 6).map((obj, index) => (
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
