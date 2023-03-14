import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import Footer from '../../componets/Footer/Footer';
import Header from '../../componets/Header/Header';
import { fetchGenresAnime } from '../../redux/animeSlice/asyncAction';
import { genre } from '../../redux/animeSlice/selectors';
import { text } from '../../redux/filterSlice/selectors';
import { useAppDispatch } from '../../redux/store';
import styles from './GenrePage.module.scss';
import { MouseEvent } from 'react';

const GenrePage = () => {
  const dispatch = useAppDispatch();
  const genreText = useSelector(text);
  const genreArray = useSelector(genre);
  const buttonsArray = ['1', '2', '3', '4', '5', '6'];
  const [currentPaginationButton, setCurrentPaginationButton] = useState('1');

  const onClickPaginationButton = (event: MouseEvent<HTMLButtonElement>) => {
    const target = event.target as HTMLButtonElement;
    setCurrentPaginationButton(target.innerHTML);
  };

  console.log(currentPaginationButton);
  useEffect(() => {
    dispatch(fetchGenresAnime({ genreText, currentPaginationButton }));
  }, [currentPaginationButton, dispatch, genreText]);

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
          <ul className={styles.GenrePage__listButton}>
            {buttonsArray.map((button) => (
              <li>
                <button
                  className={styles.GenrePage__listItemButton}
                  onClick={onClickPaginationButton}>
                  {button}
                </button>
              </li>
            ))}
          </ul>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default GenrePage;
