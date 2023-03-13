import React from 'react';
import { useSelector } from 'react-redux';
import { errorMessage } from '../../redux/userSlice/selectors';
import onePanchMan from '../../assets/images/onePanchMan.png';
import rectangle from '../../assets/images/rectangle.png';
import styles from './LoginModal.module.scss';
import { FORM_TYPES } from '../../common/const';
import { useUserModal } from '../../hooks/useUserModal';
import { useInput } from '../../hooks/useValidation';

const LoginLogup = () => {
  const error = useSelector(errorMessage);
  const {
    email,
    password,
    handleClickSubmitButton,
    handleEmailChange,
    handlePasswordChange,
    handleClickChangeButton,
    formType,
  } = useUserModal();
  const emailsValidation = useInput(email, { isEmpty: true, emailError: true });
  const passwordValidation = useInput(password, { isEmpty: true, minLength: 5, maxLength: 12 });
  const isLoginModal = formType === FORM_TYPES.singIn;

  return (
    <div>
      <div className={styles.Login}>
        <div className={styles.Login__container}>
          <h1 className={styles.Login__title}>{isLoginModal ? 'Sing In' : 'Sing Up'}</h1>
          <div className={styles.Login__inputsContainer}>
            <div className={styles.Login__inputContainer}>
              <h2 className={styles.Login__inputName}>Email</h2>
              <input
                value={email}
                onChange={(event) => handleEmailChange(event)}
                placeholder="email"
                className={styles.Login__input}
                type="text"
              />
              {emailsValidation.isEmpty && (
                <p className={styles.Login__validationError}>The field cannot be empty</p>
              )}
              {emailsValidation.emailError && (
                <p className={styles.Login__validationError}>No valid email</p>
              )}
            </div>
            <div className={styles.Login__inputContainer}>
              <h2 className={styles.Login__inputName}>Password</h2>
              <input
                value={password}
                onChange={(event) => handlePasswordChange(event)}
                placeholder="password"
                className={styles.Login__input}
                type="password"
              />
              {passwordValidation.isEmpty && (
                <p className={styles.Login__validationError}>The field cannot be empty</p>
              )}
              {passwordValidation.minLength && (
                <p className={styles.Login__validationError}>Minimum number of characters: 5</p>
              )}
              {passwordValidation.maxLength && (
                <p className={styles.Login__validationError}>Maximum number of characters: 12</p>
              )}
            </div>
            {error && <p style={{ textAlign: 'center' }}>ОШИБКА</p>}
            <button
              disabled={!emailsValidation.inputValid || !passwordValidation.inputValid}
              onClick={handleClickSubmitButton}
              className={styles.Login__buttonSubmit}>
              <p className={styles.Login__buttonText}>{isLoginModal ? 'Sign in' : 'Sing Up'}</p>
            </button>
          </div>
          <div className={styles.Login__additionalInformation}>
            <p className={styles.Login__additionalInformationText}>
              {isLoginModal ? 'It`s not registered?' : 'Already registered?'}{' '}
            </p>
            <button
              onClick={handleClickChangeButton}
              className={styles.Login__additionalInformationButton}>
              {isLoginModal ? 'Create in account' : 'Sign in'}
            </button>
          </div>
        </div>
        <div className={styles.Login__imageContainer}>
          <img width={530} src={isLoginModal ? onePanchMan : rectangle} alt="one panch man" />
        </div>
      </div>
    </div>
  );
};

export default LoginLogup;
