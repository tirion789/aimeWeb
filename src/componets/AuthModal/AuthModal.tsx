import React, { useRef } from 'react';
import onePanchMan from '../../assets/images/onePanchMan.png';
import rectangle from '../../assets/images/rectangle.png';
import styles from './AuthModal.module.scss';
import { FORM_TYPES } from '../../common/const';
import { useUserModal } from '../../hooks/useUserModal';
import { useInput } from '../../hooks/useValidation';
import { authModalSelector } from '../../redux/filterSlice/selectors';
import { setIsOpenPopupLogin } from '../../redux/filterSlice/filterSlice';
import { useOutsideClick } from '../../hooks/useOutsideClick';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';

const AuthModal = () => {
  const {
    email,
    password,
    nickname,
    handleClickSubmitButton,
    handleEmailChange,
    handlePasswordChange,
    handleClickChangeButton,
    handleNicknameChange,
    formType,
  } = useUserModal();
  const emailsValidation = useInput(email, { isEmpty: true, emailError: true });
  const passwordValidation = useInput(password, { isEmpty: true, minLength: 5, maxLength: 12 });
  const isLoginModal = formType === FORM_TYPES.singIn;

  const popupModal = useAppSelector(authModalSelector);
  const refModal = useRef(null);
  const dispatch = useAppDispatch();

  const handleClickOutside = () => {
    dispatch(setIsOpenPopupLogin(false));
  };

  useOutsideClick(refModal, handleClickOutside, popupModal);

  return (
    <div className={`${popupModal && styles.Overlay}`}>
      <div ref={refModal} className={` ${styles.Modal} ${popupModal && styles.Show}`}>
        <div className={styles.Login}>
          <div className={styles.Container}>
            <p className={styles.Title}>{isLoginModal ? 'Sing In' : 'Sing Up'}</p>
            <div className={styles.InputsContainer}>
              <div className={styles.InputContainer}>
                <p className={styles.InputName}>Email</p>
                <input
                  value={email}
                  onChange={(event) => handleEmailChange(event)}
                  placeholder="email"
                  className={styles.Input}
                  type="text"
                />
                {emailsValidation.isEmpty && (
                  <p className={styles.ValidationError}>The field cannot be empty</p>
                )}
                {emailsValidation.emailError && (
                  <p className={styles.ValidationError}>No valid email</p>
                )}
              </div>
              {formType === FORM_TYPES.signUp && (
                <div className={styles.InputContainer}>
                  <p className={styles.InputName}>Nickname</p>
                  <input
                    value={nickname}
                    onChange={(event) => handleNicknameChange(event)}
                    placeholder="text"
                    className={styles.Input}
                    type="text"
                  />
                </div>
              )}
              <div className={styles.InputContainer}>
                <p className={styles.InputName}>Password</p>
                <input
                  value={password}
                  onChange={(event) => handlePasswordChange(event)}
                  placeholder="password"
                  className={styles.Input}
                  type="password"
                />
                {passwordValidation.isEmpty && (
                  <p className={styles.ValidationError}>The field cannot be empty</p>
                )}
                {passwordValidation.minLength && (
                  <p className={styles.ValidationError}>Minimum number of characters: 5</p>
                )}
                {passwordValidation.maxLength && (
                  <p className={styles.ValidationError}>Maximum number of characters: 12</p>
                )}
              </div>
              <button
                disabled={!emailsValidation.inputValid || !passwordValidation.inputValid}
                onClick={handleClickSubmitButton}
                className={styles.ButtonSubmit}>
                <p className={styles.ButtonText}>{isLoginModal ? 'Sign in' : 'Sing Up'}</p>
              </button>
            </div>
            <div className={styles.AdditionalInformation}>
              <p className={styles.AdditionalInformationText}>
                {isLoginModal ? 'It`s not registered?' : 'Already registered?'}{' '}
              </p>
              <button
                onClick={handleClickChangeButton}
                className={styles.AdditionalInformationButton}>
                {isLoginModal ? 'Create in account' : 'Sign in'}
              </button>
            </div>
          </div>
          <div className={styles.ImageContainer}>
            <img width={530} src={isLoginModal ? onePanchMan : rectangle} alt="one panch man" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthModal;
