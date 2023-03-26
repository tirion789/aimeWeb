import React, { useRef } from 'react';
import { useSelector } from 'react-redux';
import { popup } from '../../redux/filterSlice/selectors';
import styles from './Modal.module.scss';
import { useAppDispatch } from '../../redux/store';
import { setPopup } from '../../redux/filterSlice/filterSlice';
import { useOutsideClick } from '../../hooks/useOutsideClick';
import LoginModal from '../LoginModal/LoginModal';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Modal = () => {
  const popupModal = useSelector(popup);
  const refModal = useRef(null);
  const dispatch = useAppDispatch();

  const onClickOutside = () => {
    dispatch(setPopup(false));
  };

  useOutsideClick(refModal, onClickOutside, popupModal);

  return (
    <div>
      <div className={`${popupModal && styles.Modal__overlay}`}>
        <div ref={refModal} className={` ${styles.Modal} ${popupModal && styles.Modal__show}`}>
          <LoginModal />
        </div>
      </div>
      <ToastContainer
        position="bottom-right"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
    </div>
  );
};

export default Modal;
