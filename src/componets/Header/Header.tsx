import React from 'react';
import styles from './Header.module.scss';
import logo from '../../assets/images/icons/MeWeeb.svg';
import account from '../../assets/images/icons/Account.svg';
import { Link } from 'react-router-dom';
import Search from '../Search/Search';
import Genres from '../Genres/Genres';
import { useAppDispatch } from '../../redux/store';
import { setPopup } from '../../redux/filterSlice/filterSlice';
import Modal from '../Modal/Modal';
import { useAuth } from '../../hooks/useAuth';
import { removeUser } from '../../redux/userSlice/userSlice';
import exit from '../../assets/images/icons/exit.svg';

const Header: React.FC = () => {
  const dispatch = useAppDispatch();
  const { isAuth, email } = useAuth();
  const onClickLoginBtn = () => {
    dispatch(setPopup(true));
  };

  const onExit = () => {
    dispatch(removeUser());
    localStorage.removeItem('users');
  };

  return (
    <header className={styles.Header}>
      <Link to={'/'}>
        <div className={styles.Header__logoContainer}>
          <img src={logo} alt="logo" />
        </div>
      </Link>
      <nav>
        <ul className={styles.Header__navigationList}>
          <li>
            <Genres />
          </li>
          <li className={styles.Header__navigationListItem}>
            <Link to={'/movies'}>Movies</Link>
          </li>
          <li className={styles.Header__navigationListItem}>
            <a href="/">ONas</a>
          </li>
        </ul>
      </nav>
      <div className={styles.Header__searchContainer}>
        <Search />
        {isAuth ? (
          <div className={styles.Header__userButton}>
            <p className={styles.Header__profileLink}>
              <Link to={'/profile'}>{email}</Link>
            </p>
            <button className={styles.Header__buttonExit} onClick={onExit}>
              <img width={50} src={exit} alt="exit" />
            </button>
          </div>
        ) : (
          <button onClick={onClickLoginBtn} className={styles.Header__searchContainer_account}>
            <img src={account} alt="account" />
          </button>
        )}
      </div>
      <Modal />
    </header>
  );
};

export default Header;
