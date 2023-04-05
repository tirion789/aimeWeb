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

  console.log(genreArray);

  return (
    <>
      <Header />
      <main className={styles.GenrePage}>
        <div className={styles.GenrePage__overlay}>
          <h1 className={styles.GenrePage__title}>{genreText}</h1>
          <ul className={styles.GenrePage__list}>
            {genreArray.map(({ id, image, title }) => (
              <li key={id} className={styles.GenrePage__listItem}>
                <Link to={`/anime/${id}`}>
                  <img
                    className={styles.GenrePage__image}
                    width={257}
                    height={400}
                    src={image}
                    alt="imageAnime"
                  />
                  <div className={styles.GenrePage__container}>
                    <h2 className={styles.GenrePage__listItemName}>{title.romaji}</h2>
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
    </>
  );
};

export default GenrePage;
