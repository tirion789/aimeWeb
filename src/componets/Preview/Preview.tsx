import React from 'react';
import styles from './Preview.module.scss';
import R from '../../assets/images/icons/R.svg';
import HD from '../../assets/images/icons/4K.svg';
import DUB from '../../assets/images/icons/DUB.svg';
import SUB from '../../assets/images/icons/SUB.svg';
import { setItems } from '../../redux/profileSlice/profileSlice';
import { Link } from 'react-router-dom';
import { useAppDispatch } from '../../redux/hooks';
import { PreviewProps } from './interface';
import Loader from '../Loader/Loader';
import { useAuth } from '../../hooks/useAuth';
import { setIsOpenPopupLogin } from '../../redux/filterSlice/filterSlice';

const Preview = ({ items, loading }: PreviewProps) => {
  const iconArray = [R, HD, DUB, SUB];
  const dispatch = useAppDispatch();
  const { isAuth } = useAuth();

  const handleClickAddListButton = () => {
    if (items) {
      dispatch(setItems(items));
    }
  };

  const handleClickLogin = () => {
    dispatch(setIsOpenPopupLogin(true));
  };

  if (loading) {
    return <Loader />;
  }

  return (
    <div style={{ backgroundImage: `url(${items?.cover})` }} className={styles.preview__background}>
      <div className={styles.preview__overlay}>
        <div className={styles.preview}>
          {loading && <Loader />}
          <p className={styles.preview__spotlight}>#1 spotlight</p>
          <h1 className={styles.preview__title}>{items?.title.english}</h1>
          <div className={styles.preview__listContaier}>
            <ul className={styles.preview__iconList}>
              {iconArray.map((icon, index) => (
                <li key={index}>
                  <img src={icon} alt="icon" />
                </li>
              ))}
            </ul>
            <ul className={styles.preview__seriesList}>
              <li className={styles.preview__seriesListItem}>{items?.type}</li>
              <li className={styles.preview__seriesListItem}>Ep 1 / {items?.totalEpisodes} </li>
              <li className={styles.preview__seriesListItem}>{items?.duration}m</li>
            </ul>
          </div>
          {items?.description && (
            <div
              className={styles.preview__description}
              dangerouslySetInnerHTML={{ __html: items?.description }}
            />
          )}
          <div className={styles.preview__buttonsContainer}>
            <Link to={`/anime/${items?.id}`} className={styles.preview__buttonsContainer_watchLink}>
              Watch Now
            </Link>
            {isAuth ? (
              <button
                onClick={handleClickAddListButton}
                className={styles.preview__buttonsContainer_addToList}>
                Add to List
              </button>
            ) : (
              <button onClick={handleClickLogin} className="loginMainPage">
                Login
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Preview;
