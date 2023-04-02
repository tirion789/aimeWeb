import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import AlphabetSearch from '../../componets/AlphabetSearch/AlphabetSearch';
import Footer from '../../componets/Footer/Footer';
import Header from '../../componets/Header/Header';
import { fetchMoviesAnimeAph } from '../../redux/animeSlice/asyncAction';
import { aphSelector } from '../../redux/animeSlice/selectors';
import { letterSelector } from '../../redux/filterSlice/selectors';
import styles from './AlphabetAnime.module.scss';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';

const AlphabetAnime = () => {
  const animeAphArray = useAppSelector(aphSelector);
  const dispatch = useAppDispatch();
  const currentLetter = useAppSelector(letterSelector);

  useEffect(() => {
    dispatch(fetchMoviesAnimeAph(currentLetter));
  }, [currentLetter, dispatch]);
  return (
    <div className={styles.wrapper}>
      <Header />
      <main className={styles.AlphabetAnime}>
        <div className={styles.AlphabetAnime__overlay}>
          <ul className={styles.AlphabetAnime__list}>
            {animeAphArray.map(({ animeId, animeTitle, animeImg }) => (
              <Link to={`/anime/${animeId}`}>
                <li className={styles.AlphabetAnime__listItem}>
                  <img className={styles.AlphabetAnime__listItemImg} src={animeImg} alt="anime" />
                  <div className={styles.AlphabetAnime__container}>
                    <h2 className={styles.AlphabetAnime__listItemTitle}>{animeTitle}</h2>
                  </div>
                </li>
              </Link>
            ))}
          </ul>
          <AlphabetSearch />
        </div>
      </main>
      <footer className={styles.FooterBackground}>
        <div className={styles.FooterOverlay}>
          <Footer />
        </div>
      </footer>
    </div>
  );
};

export default AlphabetAnime;
