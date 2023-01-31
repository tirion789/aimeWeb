import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { titleArray } from '../../common/const';
import { fetchAnimes } from '../../redux/animeSlice/asyncAction';
import { RootState, useAppDispatch } from '../../redux/store';
import styles from './Recommended.module.scss';

const Recommended: React.FC = () => {
  const items = useSelector((state: RootState) => state.anime.items);

  const dispatch = useAppDispatch();

  const getFilms = () => {
    dispatch(fetchAnimes());
  };

  useEffect(() => {
    getFilms();
  }, []);

  console.log(items);
  return (
    <div className={styles.Recommended}>
      <div className={styles.Recommended__overlay}>
        <div className={styles.mostPopular}>
          <h2 className={styles.mostPopular__title}>Most Popular</h2>
          <ul className={styles.mostPopular__titleList}>
            {items.slice(0, 6).map((obj, index) => (
              <li key={index} className={styles.mostPopular__titleListItem}>
                <Link to={`/anime/${obj.code}`}>
                  <img
                    className={styles.mostPopular__image}
                    width={257}
                    height={400}
                    src={`https://cdn.weekstorm.us${obj.posters.original.url}`}
                    alt=""
                  />
                </Link>
                <div className={styles.mostPopular__container}>
                  <h2 className={styles.mostPopular__titleListItemNames}>{obj.names.en}</h2>
                </div>
              </li>
            ))}
          </ul>
        </div>
        <div className={styles.mostPopular}>
          <h2 className={styles.mostPopular__title}>Top Airing</h2>
          <ul className={styles.mostPopular__titleList}>
            {titleArray.slice(0, 6).map((obj, index) => (
              <li className={styles.mostPopular__titleListItem} key={index}>
                <Link to={'/anime'}>
                  <img
                    className={styles.mostPopular__image}
                    width={257}
                    height={400}
                    src={obj.imageUrl}
                    alt=""
                  />
                </Link>
                <div className={styles.mostPopular__container}>
                  <h2>{obj.title}</h2>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Recommended;

// vinland-saga-2, bleach, ijiranaide-nagatoro-san-2nd-attack, boruto-naruto-next-generations, maou-gakuin-no-futekigousha-ii, black-clover
