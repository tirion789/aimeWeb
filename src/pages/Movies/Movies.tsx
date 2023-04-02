import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Footer from '../../componets/Footer/Footer';
import Header from '../../componets/Header/Header';
import { fetchMoviesAnime } from '../../redux/animeSlice/asyncAction';
import { moviesSelector } from '../../redux/animeSlice/selectors';
import styles from './Movies.module.scss';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';

const Movies = () => {
  const moviesAnime = useAppSelector(moviesSelector);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchMoviesAnime());
  }, [dispatch]);

  console.log(moviesAnime);

  return (
    <div className={styles.wrapper}>
      <Header />
      <main className={styles.Movies}>
        <div className={styles.Movies__overlay}>
          <ul className={styles.Movies__list}>
            {moviesAnime.map(({ animeId, animeTitle, animeImg }) => (
              <Link key={animeId} to={`/anime/${animeId}`}>
                <li className={styles.Movies__listItem}>
                  <img width={257} height={364} src={animeImg} alt="anime movie" />
                  <div className={styles.Movies__conteiner}>
                    <h2 className={styles.Movies__listItemName}>{animeTitle}</h2>
                  </div>
                </li>
              </Link>
            ))}
          </ul>
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

export default Movies;
