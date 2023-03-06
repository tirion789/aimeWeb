import React, { useEffect, useState } from 'react';
import styles from './Logup.module.scss';
import rectangle from '../../assets/images/rectangle.png';
import { useAppDispatch } from '../../redux/store';
import { getRegister } from '../../redux/userSlice/asyncAction';
import { setUser } from '../../redux/userSlice/userSlice';
import { useSelector } from 'react-redux';
import { errorMessage } from '../../redux/userSlice/selectors';

const Logup = ({ onChangeForm }: any) => {
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

  const onRegister = () => {
    dispatch(getRegister({ email, password }));
  };
  return (
    <div>
      <div className={styles.Logup}>
        <div className={styles.Logup__container}>
          <h1 className={styles.Logup__title}>Sign up</h1>
          <div className={styles.Logup__inputsContainer}>
            <div className={styles.Logup__inputContainer}>
              <h2 className={styles.Logup__inputName}>Email</h2>
              <input
                onChange={(e) => setEmail(e.target.value)}
                value={email}
                placeholder="email"
                className={styles.Logup__input}
                type="text"
              />
            </div>
            <div className={styles.Logup__inputContainer}>
              <h2 className={styles.Logup__inputName}>Password</h2>
              <input
                onChange={(e) => setPassword(e.target.value)}
                value={password}
                placeholder="password"
                className={styles.Logup__input}
                type="password"
              />
            </div>
            {error && <p style={{ textAlign: 'center' }}>ОШИБКА</p>}
            <button onClick={onRegister} className={styles.Logup__button}>
              <p className={styles.Logup__buttonText}>Sign up</p>
            </button>
          </div>
          <div className={styles.Logup__additionalInformation}>
            <p className={styles.Logup__additionalInformationText}>Already registered? </p>
            <button onClick={onChangeForm} className={styles.Logup__additionalInformationButton}>
              Sign in
            </button>
          </div>
        </div>
        <div className={styles.Logup__imageContainer}>
          <img width={530} src={rectangle} alt="rectangle" />
        </div>
      </div>
    </div>
  );
};

export default Logup;
