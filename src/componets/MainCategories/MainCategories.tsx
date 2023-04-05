import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { fetchPopularAnimes, fetchTopAiringAnimes } from '../../redux/animeSlice/asyncAction';
import Loader from '../Loader/Loader';
import { MainCategoriesProps } from './interface';
import styles from './MainCategories.module.scss';
import { useAppDispatch } from '../../redux/hooks';
import { ReactComponent as Star } from '../../assets/images/icons/star.svg';

const MainCategories = ({ items, status, name }: MainCategoriesProps) => {
  const MAXIMUM_NUMBER_OF_ELEMENTS = 18;
  const INITIAL_NUMBER_OF_ELEMENTS = 6;

  const dispatch = useAppDispatch();
  const [visibleNext, setVisibleNext] = useState(INITIAL_NUMBER_OF_ELEMENTS);

  const handleClickWievMoreButton = () => {
    if (visibleNext < MAXIMUM_NUMBER_OF_ELEMENTS) {
      setVisibleNext((prev) => prev + INITIAL_NUMBER_OF_ELEMENTS);
    }
  };

  const handleClickCloseButton = () => {
    setVisibleNext(INITIAL_NUMBER_OF_ELEMENTS);
  };

  useEffect(() => {
    dispatch(fetchTopAiringAnimes());
    dispatch(fetchPopularAnimes());
  }, [dispatch]);

  if (status === 'loading') {
    return <Loader />;
  }

  console.log(items);

  return (
    <div className={styles.MainCategories}>
      <div className={styles.MainCategories__container}>
        <div className={styles.MainCategories__headerContainer}>
          <h2 className={styles.MainCategories__title}>{name}</h2>
          <button onClick={handleClickWievMoreButton} className={styles.MainCategories__viewMore}>
            View more
          </button>
        </div>
        {status === 'error' ? (
          <p className={styles.MainCategories__error}>Server error</p>
        ) : (
          <>
            <ul className={styles.MainCategories__titleList}>
              {items
                .slice(0, visibleNext)
                .map(({ id, title, image, rating, totalEpisodes }, index) => (
                  <li key={index} className={styles.MainCategories__titleListItem}>
                    <Link to={`/anime/${id}`}>
                      <img
                        className={styles.MainCategories__image}
                        width={257}
                        height={400}
                        src={image}
                        alt=""
                      />
                      <div className={styles.MainCategories__titleListContainer}>
                        <h2 className={styles.MainCategories__titleListItemNames}>
                          {title.romaji}
                        </h2>
                        <div style={{ display: 'flex' }}>
                          <p className={styles.MainCategories__viewMore}>
                            Episodes: {totalEpisodes}
                          </p>
                          <div style={{ marginLeft: 'auto' }}>
                            <Star width={19} height={19} />
                            <span
                              style={{ marginLeft: '10px' }}
                              className={styles.MainCategories__viewMore}>
                              {String(rating ? rating : '')
                                .split('')
                                .join('.')}
                            </span>
                          </div>
                        </div>
                      </div>
                    </Link>
                  </li>
                ))}
            </ul>
            {visibleNext === MAXIMUM_NUMBER_OF_ELEMENTS ? (
              <button
                onClick={handleClickCloseButton}
                className={styles.MainCategories__closeButton}>
                Close
              </button>
            ) : (
              ''
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default MainCategories;
