import React, { useState } from 'react';
import styles from './Header.module.scss';
import { ReactComponent as Logo } from '../../assets/images/icons/MeWeeb.svg';
import { ReactComponent as Account } from '../../assets/images/icons/Account.svg';
import { Link } from 'react-router-dom';
import Search from '../Search/Search';
import { setIsOpenPopupLogin } from '../../redux/filterSlice/filterSlice';
import { useAuth } from '../../hooks/useAuth';
import { removeUser, setStatusMessage } from '../../redux/userSlice/userSlice';
import { ReactComponent as Exit } from '../../assets/images/icons/exit.svg';
import Navigation from '../Navigation/Navigation';
import AuthModal from '../AuthModal/AuthModal';
import { getAuth, signOut } from 'firebase/auth';
import { useAppDispatch } from '../../redux/hooks';

const Header = () => {
  const dispatch = useAppDispatch();
  const { isAuth } = useAuth();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleClickLoginButton = () => {
    dispatch(setIsOpenPopupLogin(true));
  };

  const handleClickDropdownButton = () => {
    setIsDropdownOpen((prev) => !prev);
  };

  const handleClickExitButton = () => {
    const auth = getAuth();
    signOut(auth).then(() => {
      dispatch(removeUser());
    });
    localStorage.removeItem('users');
    dispatch(setStatusMessage('loading'));
  };

  return (
    <header className={styles.Header}>
      <div className={styles.MenuLogo}>
        <button
          onClick={handleClickDropdownButton}
          className={!isDropdownOpen ? styles.DropdownMenu : styles.DropdownMenuClose}>
          <span></span>
        </button>
        <div className={styles.LogoContainer}>
          <Link to={'/'}>
            <Logo />
          </Link>
        </div>
        <Navigation isDropdownOpen={isDropdownOpen} />
      </div>
      <div className={styles.SearchContainer}>
        <Search />
        {isAuth ? (
          <div className={styles.UserButton}>
            <p className={styles.ProfileLink}>
              <Link to={'/profile'}>P</Link>
            </p>
            <button className={styles.ButtonExit} onClick={handleClickExitButton}>
              <Exit />
            </button>
          </div>
        ) : (
          <button onClick={handleClickLoginButton} className={styles.SearchContainer_account}>
            <Account />
          </button>
        )}
      </div>
      <AuthModal />
    </header>
  );
};

export default Header;
