import React from 'react';
import styles from './Header.module.scss';
import logo from '../../assets/images/icons/MeWeeb.svg';
import account from '../../assets/images/icons/Account.svg';
import { navigationArray } from '../../common/const';
import { Link } from 'react-router-dom';
import Search from '../Search/Search';
import Genres from '../Genres/Genres';

const Header: React.FC = () => {
  return (
    <header className={styles.Header}>
      <Link to={'/'}>
        <div className={styles.Header__logoContainer}>
          <img src={logo} alt="logo" />
        </div>
      </Link>
      <div className={styles.Header__navigationList}>
        {navigationArray.map((string) =>
          string === 'Genre' ? (
            <li>
              <Genres />
            </li>
          ) : (
            <li className={styles.Header__navigationListItem} key={string}>
              <a href="/">{string}</a>
            </li>
          ),
        )}
      </div>
      <div className={styles.Header__searchContainer}>
        <button className={styles.Header__searchContainer_premium}>Premium</button>
        <Search />
        <button className={styles.Header__searchContainer_account}>
          <img src={account} alt="account" />
        </button>
      </div>
    </header>
  );
};

export default Header;
