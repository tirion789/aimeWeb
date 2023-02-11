import React from 'react';
import styles from './Logup.module.scss';
import rectangle from '../../assets/images/rectangle.png';

const Logup = ({ onChangeForm }: any) => {
  return (
    <div>
      <div className={styles.Logup}>
        <div className={styles.Logup__container}>
          <h1 className={styles.Logup__title}>Sign up</h1>
          <div className={styles.Logup__inputsContainer}>
            <div className={styles.Logup__inputContainer}>
              <h2 className={styles.Logup__inputName}>Email</h2>
              <input placeholder="email" className={styles.Logup__input} type="text" />
            </div>
            <div className={styles.Logup__inputContainer}>
              <h2 className={styles.Logup__inputName}>Password</h2>
              <input placeholder="password" className={styles.Logup__input} type="password" />
            </div>
            <button className={styles.Logup__button}>
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
