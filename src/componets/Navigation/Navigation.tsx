import React from 'react';
import styles from './Navigation.module.scss';
import { Link } from 'react-router-dom';
import { INavigation } from './interface';
import { useAppDispatch } from '../../redux/hooks';
import { setIsGenrePopupOpen } from '../../redux/filterSlice/filterSlice';
import Genres from '../Genres/Genres';

const Navigation: React.FC<INavigation> = ({ isDropdownOpen }) => {
  const dispatch = useAppDispatch();

  const handleIsPopapOpen = () => {
    dispatch(setIsGenrePopupOpen(true));
  };

  return (
    <nav className={styles.Navigation__navigation}>
      <ul
        className={`${styles.Navigation__navigationList} ${
          isDropdownOpen && styles.Navigation__active
        }`}>
        <li>
          <button onClick={handleIsPopapOpen} className={styles.Navigation__genreButton}>
            Genre
          </button>
          <Genres />
        </li>
        <li className={styles.Navigation__navigationListItem}>
          <Link className={styles.Navigation__navigationListMovies} to={'/movies'}>
            Movies
          </Link>
        </li>
        <li className={styles.Navigation__navigationListItem}>
          <a className={styles.Navigation__navigationListMovies} href="/">
            ONAs
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
