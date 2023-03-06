import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import Footer from '../../componets/Footer/Footer';
import Header from '../../componets/Header/Header';
import { fetchMoviesAnime } from '../../redux/animeSlice/asyncAction';
import { movies } from '../../redux/animeSlice/selectors';
import { useAppDispatch } from '../../redux/store';
import styles from './Movies.module.scss';

const Movies = () => {
  const moviesAnime = useSelector(movies);
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
            {moviesAnime.map((obj) => (
              <Link to={`/anime/${obj.animeId}`}>
                <li className={styles.Movies__listItem}>
                  <img width={257} height={364} src={obj.animeImg} alt="anime movie" />
                  <p>{obj.animeTitle}</p>
                </li>
              </Link>
            ))}
          </ul>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Movies;
