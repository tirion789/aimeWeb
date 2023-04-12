import React from 'react';
import { Link } from 'react-router-dom';
import { setItems } from '../../redux/profileSlice/profileSlice';
import styles from './AdvertisementTitle.module.scss';
import { useGetAnimeNagataroQuery } from '../../redux/api/query';
import { useAppDispatch } from '../../redux/hooks';
import { useAuth } from '../../hooks/useAuth';
import { setIsOpenPopupLogin } from '../../redux/filterSlice/filterSlice';

const AdvertisementTitle = () => {
  const dispatch = useAppDispatch();
  const { isAuth } = useAuth();

  const { data: nagatoro } = useGetAnimeNagataroQuery('/info/140596');

  const onClickAddButton = () => {
    if (nagatoro) {
      dispatch(setItems(nagatoro));
    }
  };

  const handleClickLogin = () => {
    dispatch(setIsOpenPopupLogin(true));
  };

  return (
    <div className={styles.AdvertisementTitle}>
      <div className={styles.ImageContainer}>
        <img
          src="https://animecorner.me/wp-content/uploads/2023/01/04_02.jpg"
          alt="Don't Toy with Me, Miss Nagatoro"
        />
      </div>
      <div className={styles.InformationContainer}>
        <h2 className={styles.InformationContainerTitle}>Don't Toy with Me, Miss Nagatoro</h2>
        <h3>2nd Season</h3>
        <p className={styles.InformationContainerText}>
          "A girl in a lower grade just made me cry!" One day, Senpai visits the library after
          school and becomes the target of a super sadistic junior! The name of the girl who teases,
          torments, and tantalizes Senpai is "Nagatoro!" She's annoying yet adorable. It's painf...
          More
        </p>
        <div className={styles.ButtonContainer}>
          <Link to={`/anime/${nagatoro?.id}`} className={styles.InformationButton_watch}>
            Watch Now
          </Link>
          {isAuth ? (
            <button onClick={onClickAddButton} className={styles.InformationButton_addToList}>
              Add to list
            </button>
          ) : (
            <button onClick={handleClickLogin} className="loginMainPage">
              Login
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default AdvertisementTitle;
