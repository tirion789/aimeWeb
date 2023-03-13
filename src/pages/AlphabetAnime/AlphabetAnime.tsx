import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import AlphabetSearch from '../../componets/AlphabetSearch/AlphabetSearch';
import Footer from '../../componets/Footer/Footer';
import Header from '../../componets/Header/Header';
import { fetchMoviesAnimeAph } from '../../redux/animeSlice/asyncAction';
import { aph } from '../../redux/animeSlice/selectors';
import { letter } from '../../redux/filterSlice/selectors';
import { useAppDispatch } from '../../redux/store';
import styles from './AlphabetAnime.module.scss';

const AlphabetAnime = () => {
  const animeAphArray = useSelector(aph);
  const dispatch = useAppDispatch();
  const currentLetter = useSelector(letter);
  console.log(animeAphArray);

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
      <Footer />
    </div>
  );
};

export default AlphabetAnime;
