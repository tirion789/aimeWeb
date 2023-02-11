import React, { useRef, useState } from 'react';
import { useSelector } from 'react-redux';
import { popup } from '../../redux/filterSlice/selectors';
import styles from './Modal.module.scss';
import Login from '../Login/Login';
import Logup from '../Logup/Logup';
import { useAppDispatch } from '../../redux/store';
import { setPopup } from '../../redux/filterSlice/filterSlice';
import { FORM_TYPES } from '../../common/const';
import { useOutsideClick } from '../../hooks/useOutsideClick';

const Modal = () => {
  const popupModal = useSelector(popup);
  const refModal = useRef(null);
  const [formType, setFormType] = useState(FORM_TYPES.singIn);
  const dispatch = useAppDispatch();

  const onClickOutside = () => {
    dispatch(setPopup(false));
  };

  useOutsideClick(refModal, onClickOutside, popupModal);

  const onSetLoginForm = () => {
    if (formType === FORM_TYPES.signUp) {
      setFormType(FORM_TYPES.singIn);
    }
  };

  const onSetLogupForm = () => {
    if (formType === FORM_TYPES.singIn) {
      setFormType(FORM_TYPES.signUp);
    }
  };

  return (
    <div>
      <div className={`${popupModal && styles.Modal__overlay}`}>
        <div ref={refModal} className={` ${styles.Modal} ${popupModal && styles.Modal__show}`}>
          {popupModal && formType === FORM_TYPES.singIn ? (
            <Login onChangeForm={onSetLogupForm} />
          ) : (
            <Logup onChangeForm={onSetLoginForm} />
          )}
        </div>
      </div>
    </div>
  );
};

export default Modal;
