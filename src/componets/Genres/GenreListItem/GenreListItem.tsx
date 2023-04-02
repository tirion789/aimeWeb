import React from 'react';
import { Link } from 'react-router-dom';
import { useAppDispatch } from '../../../redux/hooks';
import { setGenre } from '../../../redux/filterSlice/filterSlice';
import styles from './GenreListItem.module.scss';
import { GenreListItemProps } from './interface';

const GenreListItem = ({ genre, key }: GenreListItemProps) => {
  const dispatch = useAppDispatch();

  const handleOnGenreClick = (value: string) => {
    dispatch(setGenre(value));
  };

  const handleActiveSeries = (genre: string) => {
    handleOnGenreClick(genre);
  };
  return (
    <li key={key} className={styles.GenreListItem}>
      <Link onClick={() => handleActiveSeries(genre)} to={`/genre/${genre}`}>
        {genre}
      </Link>
    </li>
  );
};

export default GenreListItem;
