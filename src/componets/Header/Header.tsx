import React from 'react';
import styles from './Header.module.scss';
import logo from '../../assets/images/icons/MeWeeb.svg';
import account from '../../assets/images/icons/Account.svg';
import { navigationArray } from '../../common/const';

const Header: React.FC = () => {
  return (
    <header className={styles.header}>
      <div className={styles.header__logoContainer}>
        <img src={logo} alt="logo" />
      </div>
      <div className={styles.header__navigationList}>
        {navigationArray.map((string) => (
          <li>
            <a href="/">{string}</a>
          </li>
        ))}
      </div>
      <div className={styles.header__searchContainer}>
        <button className={styles.header__searchContainer_premium}>Premium</button>
        <input
          placeholder="Search anime"
          className={styles.header__searchContainer_input}
          type="text"
        />
        <button className={styles.header__searchContainer_account}>
          <img src={account} alt="account" />
        </button>
      </div>
    </header>
  );
};

export default Header;
