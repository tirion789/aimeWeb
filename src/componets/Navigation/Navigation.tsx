import React from 'react';
import styles from './Navigation.module.scss';
import { Link } from 'react-router-dom';
import { NavigationProps } from './interface';

const Navigation = ({ isDropdownOpen }: NavigationProps) => {
  return (
    <nav className={styles.Navigation__navigation}>
      <ul
        className={`${styles.Navigation__navigationList} ${
          isDropdownOpen && styles.Navigation__active
        }`}>
        <li>
          <Link to={'/filters'} className={styles.Navigation__genreButton}>
            Anime
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
