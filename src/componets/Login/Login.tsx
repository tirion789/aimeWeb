import React from 'react';
import styles from './Login.module.scss';
import onePanchMan from '../../assets/images/onePanchMan.png';

const Login = ({ onChangeForm }: any) => {
  return (
    <div>
      <div className={styles.Login}>
        <div className={styles.Login__container}>
          <h1 className={styles.Login__title}>Sign in</h1>
          <div className={styles.Login__inputsContainer}>
            <div className={styles.Login__inputContainer}>
              <h2 className={styles.Login__inputName}>Email</h2>
              <input placeholder="email" className={styles.Login__input} type="text" />
            </div>
            <div className={styles.Login__inputContainer}>
              <h2 className={styles.Login__inputName}>Password</h2>
              <input placeholder="password" className={styles.Login__input} type="password" />
            </div>
            <button className={styles.Login__button}>
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
