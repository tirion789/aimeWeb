import React, { useEffect, useState } from 'react';
import styles from './Login.module.scss';
import onePanchMan from '../../assets/images/onePanchMan.png';
import { useAppDispatch } from '../../redux/store';
import { getAuthentication } from '../../redux/userSlice/asyncAction';
import { setUser } from '../../redux/userSlice/userSlice';
import { useSelector } from 'react-redux';
import { errorMessage } from '../../redux/userSlice/selectors';

const Login = ({ onChangeForm }: any) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useAppDispatch();
  const error = useSelector(errorMessage);

  useEffect(() => {
    const loggedInUser = localStorage.getItem('users');
    if (loggedInUser) {
      const foundUser = JSON.parse(loggedInUser);
      dispatch(setUser(foundUser));
    }
  }, [dispatch]);

  const onLogin = () => {
    dispatch(getAuthentication({ email, password }));
  };
  return (
    <div>
      <div className={styles.Login}>
        <div className={styles.Login__container}>
          <h1 className={styles.Login__title}>Sign in</h1>
          <div className={styles.Login__inputsContainer}>
            <div className={styles.Login__inputContainer}>
              <h2 className={styles.Login__inputName}>Email</h2>
              <input
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="email"
                className={styles.Login__input}
                type="text"
              />
            </div>
            <div className={styles.Login__inputContainer}>
              <h2 className={styles.Login__inputName}>Password</h2>
              <input
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="password"
                className={styles.Login__input}
                type="password"
              />
            </div>
            {error && <p style={{ textAlign: 'center' }}>ОШИБКА</p>}
            <button onClick={onLogin} className={styles.Login__button}>
              <p className={styles.Login__buttonText}>Sign in</p>
            </button>
          </div>
          <div className={styles.Login__additionalInformation}>
            <p className={styles.Login__additionalInformationText}>It's not registered? </p>
            <button onClick={onChangeForm} className={styles.Login__additionalInformationButton}>
              Create in account
            </button>
          </div>
        </div>
        <div className={styles.Login__imageContainer}>
          <img width={530} src={onePanchMan} alt="one panch man" />
        </div>
      </div>
    </div>
  );
};

export default Login;
