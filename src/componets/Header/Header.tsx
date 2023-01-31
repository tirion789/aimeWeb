import React from 'react';
import styles from './Header.module.scss';
import logo from '../../assets/images/icons/MeWeeb.svg';
import account from '../../assets/images/icons/Account.svg';
import { navigationArray } from '../../common/const';
import { Link } from 'react-router-dom';

const Header: React.FC = () => {
  return (
    <header className={styles.Header}>
      <Link to={'/'}>
        <div className={styles.Header__logoContainer}>
          <img src={logo} alt="logo" />
        </div>
      </Link>
      <div className={styles.Header__navigationList}>
        {navigationArray.map((string) => (
          <li className={styles.Header__navigationListItem} key={string}>
            <a href="/">{string}</a>
          </li>
        ))}
      </div>
      <div className={styles.Header__searchContainer}>
        <button className={styles.Header__searchContainer_premium}>Premium</button>
        <input
          placeholder="Search anime"
          className={styles.Header__searchContainer_input}
          type="text"
        />
        <button className={styles.Header__searchContainer_account}>
          <img src={account} alt="account" />
        </button>
      </div>
    </header>
  );
};

export default Header;
