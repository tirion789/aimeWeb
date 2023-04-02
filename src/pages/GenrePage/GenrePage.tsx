import React from 'react';
import { Link } from 'react-router-dom';
import Footer from '../../componets/Footer/Footer';
import Header from '../../componets/Header/Header';
import Pagination from '../../componets/Pagination/Pagination';
import { genreSelector } from '../../redux/animeSlice/selectors';
import { genreTextSelector } from '../../redux/filterSlice/selectors';
import styles from './GenrePage.module.scss';
import { useAppSelector } from '../../redux/hooks';

const GenrePage = () => {
  const genreText = useAppSelector(genreTextSelector);
  const genreArray = useAppSelector(genreSelector);

  return (
    <div className={styles.wrapper}>
      <Header />
      <main className={styles.GenrePage}>
        <div className={styles.GenrePage__overlay}>
          <h1 className={styles.GenrePage__title}>{genreText}</h1>
          <ul className={styles.GenrePage__list}>
            {genreArray.map(({ animeId, animeImg, animeTitle }) => (
              <li key={animeId} className={styles.GenrePage__listItem}>
                <Link to={`/anime/${animeId}`}>
                  <img
                    className={styles.GenrePage__image}
                    width={257}
                    height={400}
                    src={animeImg}
                    alt="imageAnime"
                  />
                  <div className={styles.GenrePage__container}>
                    <h2 className={styles.GenrePage__listItemName}>{animeTitle}</h2>
                  </div>
                </Link>
              </li>
            ))}
          </ul>
          <Pagination />
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

export default GenrePage;
