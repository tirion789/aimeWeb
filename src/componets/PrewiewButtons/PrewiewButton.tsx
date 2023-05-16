import React from 'react';
import styles from './PrewiewButton.module.scss';
import { Link } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { useAuth } from '../../hooks/useAuth';
import { getAnimeListNameSelector } from '../../redux/profileSlice/selectors';
import { setIsOpenPopupLogin } from '../../redux/filterSlice/filterSlice';
import { PrewiewButtonsProps } from './interface';
import { ReactComponent as Minus } from '../../assets/images/icons/minusicon.svg';
import { ReactComponent as Plus } from '../../assets/images/icons/Plusicon.svg';

const PrewiewButtons = ({ title, item, handleAdd, handleDelete }: PrewiewButtonsProps) => {
  const { isAuth } = useAuth();
  const dispatch = useAppDispatch();
  const currentAnimeListName = useAppSelector((state) => getAnimeListNameSelector(state, title));
  const handleClickLogin = () => {
    dispatch(setIsOpenPopupLogin(true));
  };
  return (
    <div className={styles.ButtonsContainer}>
      <Link to={`/anime/${item}`} className={styles.WatchLink}>
        Watch Now
      </Link>
      {isAuth ? (
        !currentAnimeListName ? (
          <button onClick={handleAdd} className={styles.AddToList}>
            <Plus className={styles.icon} />
            Add to List
          </button>
        ) : (
          <button onClick={handleDelete} className={styles.AddToList}>
            <Minus className={styles.icon} />
            Delete from list
          </button>
        )
      ) : (
        <button onClick={handleClickLogin} className="loginMainPage">
          Login
        </button>
      )}
    </div>
  );
};

export default PrewiewButtons;
