import React, { useRef } from 'react';
import { genreArray } from '../../common/const';
import styles from './Genres.module.scss';
import { setIsGenrePopupOpen } from '../../redux/filterSlice/filterSlice';
import { useOutsideClick } from '../../hooks/useOutsideClick';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { isGenrePopupOpenSelector } from '../../redux/filterSlice/selectors';
import GenreListItem from './GenreListItem/GenreListItem';

const Genres = () => {
  const refBtn = useRef(null);
  const dispatch = useAppDispatch();
  const isGenrePopupOpen = useAppSelector(isGenrePopupOpenSelector);

  const handleOutsideClick = () => {
    dispatch(setIsGenrePopupOpen(false));
  };

  useOutsideClick(refBtn, handleOutsideClick, isGenrePopupOpen);

  return (
    <>
      {isGenrePopupOpen && (
        <ul ref={refBtn} className={`${styles.Genres__list} scrollbar`}>
          {genreArray.map((genre, index) => (
            <GenreListItem genre={genre} key={index} />
          ))}
        </ul>
      )}
    </>
  );
};

export default Genres;
