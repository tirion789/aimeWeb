import React from 'react';
import styles from './Header.module.scss';
import logo from '../../assets/images/icons/MeWeeb.svg';
import account from '../../assets/images/icons/Account.svg';
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
      <ul className={styles.Header__navigationList}>
        <li>
          <Genres />
        </li>
        <li className={styles.Header__navigationListItem}>
          <Link to={'/movies'}>Movies</Link>
        </li>
        <li className={styles.Header__navigationListItem}>ONas</li>
        <li className={styles.Header__navigationListItem}>News</li>
      </ul>
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

{
  /* <ul className={styles.Header__navigationList}>
<li className={styles.Header__navigationListItem}>
  <Genres />
</li>
<li className={styles.Header__navigationListItem}>Movies</li>
<li className={styles.Header__navigationListItem}>ONas</li>
<li className={styles.Header__navigationListItem}>News</li>
</ul> */
}
