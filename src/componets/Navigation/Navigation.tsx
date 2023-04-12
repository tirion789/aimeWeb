import React from 'react';
import styles from './Navigation.module.scss';
import { Link } from 'react-router-dom';
import { NavigationProps } from './interface';

const Navigation = ({ isDropdownOpen }: NavigationProps) => {
  return (
    <nav className={styles.Navigation__navigation}>
      <ul className={`${styles.NavigationList} ${isDropdownOpen && styles.Active}`}>
        <li>
          <Link to={'/filters'} className={styles.GenreButton}>
            Anime
          </Link>
        </li>
        <li className={styles.NavigationListItem}>
          <a className={styles.NavigationListMovies} href="/">
            ONAs
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
