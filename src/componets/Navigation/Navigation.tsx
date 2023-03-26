import React from 'react';
import styles from './Navigation.module.scss';
import { Link } from 'react-router-dom';
import Genres from '../Genres/Genres';
import { INavigation } from './interface';

const Navigation: React.FC<INavigation> = ({ isDropdownOpen }) => {
  return (
    <nav className={styles.Navigation__navigation}>
      <ul
        className={`${styles.Navigation__navigationList} ${
          isDropdownOpen && styles.Navigation__active
        }`}>
        <li>
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
