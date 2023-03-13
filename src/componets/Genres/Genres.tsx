import React, { useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { genreArray } from '../../common/const';
import { MouseEvent } from 'react';
import styles from './Genres.module.scss';
import { useAppDispatch } from '../../redux/store';
import { setGenre } from '../../redux/filterSlice/filterSlice';
import { useOutsideClick } from '../../hooks/useOutsideClick';

const Genres = () => {
  const refBtn = useRef(null);
  const dispatch = useAppDispatch();
  const [openGenrePopup, setOpenGenrePopup] = useState(false);

  const onOutsideClick = () => {
    setOpenGenrePopup(false);
  };

  useOutsideClick(refBtn, onOutsideClick, openGenrePopup);

  const handleOnGenreClick = (value: string) => {
    dispatch(setGenre(value));
  };

  const onActiveSeries = (event: MouseEvent<HTMLAnchorElement>) => {
    const value = event.currentTarget.innerHTML;
    handleOnGenreClick(value);
  };

  return (
    <>
      <button onClick={() => setOpenGenrePopup(true)} className={styles.Genres}>
        Genre
      </button>
      {openGenrePopup && (
        <ul ref={refBtn} className={styles.Genres__list}>
          {genreArray.map((string) => (
            <li key={string} className={styles.Genres__listItem}>
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
