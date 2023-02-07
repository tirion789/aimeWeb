import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import Footer from '../../componets/Footer/Footer';
import Header from '../../componets/Header/Header';
import { fetchGenresAnime } from '../../redux/animeSlice/asyncAction';
import { genre } from '../../redux/animeSlice/selectors';
import { text } from '../../redux/filterSlice/selectors';
import { useAppDispatch } from '../../redux/store';
import styles from './GenrePage.module.scss';

const GenrePage = () => {
  const dispatch = useAppDispatch();
  const genreText = useSelector(text);
  const genreArray = useSelector(genre);
  useEffect(() => {
    dispatch(fetchGenresAnime(genreText));

    return () => {};
  }, [dispatch, genreText]);

  return (
    <div className={styles.GenrePage}>
      <Header />
      <main>
        <h1>{genreText}</h1>
        <ul className={styles.GenrePage__list}>
          {genreArray.map((obj) => (
            <li className={styles.GenrePage__listItem}>
              <Link to={`/anime/${obj.animeId}`}>
                <img width={257} height={400} src={obj.animeImg} alt="imageAnime" />
                <p>{obj.animeTitle}</p>
                <span>{obj.releasedData}</span>
              </Link>
            </li>
          ))}
        </ul>
      </main>
      <Footer />
    </div>
  );
};

export default GenrePage;
