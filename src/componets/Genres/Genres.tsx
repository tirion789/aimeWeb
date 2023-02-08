import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { genreArray } from '../../common/const';
import { MouseEvent } from 'react';
import styles from './Genres.module.scss';
import { useAppDispatch } from '../../redux/store';
import { setGenre } from '../../redux/filterSlice/filterSlice';

const Genres = () => {
  const [isVisibleGenreList, setisVisibleGenreList] = useState(false);
  const dispatch = useAppDispatch();

  const handleOnGenreClick = (value: string) => {
    dispatch(setGenre(value));
  };

  const onActiveSeries = (event: MouseEvent<HTMLAnchorElement>) => {
    const value = event.currentTarget.innerHTML;
    handleOnGenreClick(value);
  };

  return (
    <>
      <button onClick={() => setisVisibleGenreList(true)} className={styles.Genres}>
        Genre
      </button>
      {isVisibleGenreList && (
        <ul className={styles.Genres__list}>
          {genreArray.map((string) => (
            <li className={styles.Genres__listItem}>
              <Link onClick={onActiveSeries} to={`/genre/${string}`}>
                {string}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </>
  );
};

export default Genres;
