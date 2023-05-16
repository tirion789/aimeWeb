import React from 'react';
import styles from './Preview.module.scss';
import R from '../../assets/images/icons/R.svg';
import HD from '../../assets/images/icons/4K.svg';
import DUB from '../../assets/images/icons/DUB.svg';
import SUB from '../../assets/images/icons/SUB.svg';
import { deleteAnimes, setItems } from '../../redux/profileSlice/profileSlice';
import { useAppDispatch } from '../../redux/hooks';
import { PreviewProps } from './interface';
import Loader from '../Loader/Loader';
import { deleteAnimeToast, getToast } from '../../common/util';
import PrewiewButtons from '../PrewiewButtons/PrewiewButton';

const Preview = ({ items, loading }: PreviewProps) => {
  const iconArray = [R, HD, DUB, SUB];
  const dispatch = useAppDispatch();
  const handleClickAddListButton = () => {
    if (items) {
      dispatch(setItems(items));
      getToast(items.title.romaji, 'favorites');
    }
  };

  const handleClickDeleteFromList = () => {
    if (items) {
      dispatch(deleteAnimes(items?.title.romaji));
      deleteAnimeToast(items?.title.romaji, 'favorites');
    }
  };

  if (loading) {
    return <Loader />;
  }

  return (
    <div style={{ backgroundImage: `url(${items?.cover})` }} className={styles.Background}>
      <div className={styles.Overlay}>
        <div className={styles.Preview}>
          {loading && <Loader />}
          <p className={styles.Spotlight}>#1 spotlight</p>
          <h1 className={styles.Title}>{items?.title.english}</h1>
          <div className={styles.ListContaier}>
            <ul className={styles.IconList}>
              {iconArray.map((icon, index) => (
                <li key={index}>
                  <img src={icon} alt="icon" />
                </li>
              ))}
            </ul>
            <ul className={styles.SeriesList}>
              <li className={styles.SeriesListItem}>{items?.type}</li>
              <li className={styles.SeriesListItem}>Ep 1 / {items?.totalEpisodes} </li>
              <li className={styles.SeriesListItem}>{items?.duration}m</li>
            </ul>
          </div>
          {items?.description && (
            <div
              className={styles.Description}
              dangerouslySetInnerHTML={{ __html: items?.description }}
            />
          )}
          <PrewiewButtons
            title={items?.title.romaji}
            item={items?.id}
            handleAdd={handleClickAddListButton}
            handleDelete={handleClickDeleteFromList}
          />
        </div>
      </div>
    </div>
  );
};

export default Preview;
