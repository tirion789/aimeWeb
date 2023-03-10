import React from 'react';
import { useSelector } from 'react-redux';
import Footer from '../../componets/Footer/Footer';
import Header from '../../componets/Header/Header';
import {
  deleteAnimes,
  deletePlanned,
  deleteReviewing,
} from '../../redux/profileSlice/profileSlice';
import { favorite, planned, reviewing } from '../../redux/profileSlice/selectors';
import { useAppDispatch } from '../../redux/store';
import styles from './Profile.module.scss';

const Profile = () => {
  const favoritesArray = useSelector(favorite);
  const plannedArray = useSelector(planned);
  const reviewingArray = useSelector(reviewing);
  const dispatch = useAppDispatch();

  const onDeletedItem = (value: string) => {
    dispatch(deleteAnimes(value));
    localStorage.removeItem('tick' + value);
  };

  const onDeletedPlannedItem = (value: string) => {
    dispatch(deletePlanned(value));
    localStorage.removeItem('tick' + value);
  };

  const onDeletedReviewingItem = (value: string) => {
    dispatch(deleteReviewing(value));
    localStorage.removeItem('tick' + value);
  };

  return (
    <div className={styles.wrapper}>
      <Header />
      <main className={styles.Profile__background}>
        <div className={styles.Profile__overlay}>
          <main className={styles.Profile}>
            <div className={styles.Profile__favorites}>
              <h1 className={styles.Profile__favoritesTitle}>Favorites</h1>
              <ul className={styles.Profile__favoriteList}>
                {favoritesArray.map((obj) => (
                  <li key={obj.animeTitle} className={styles.Profile__favoriteListItem}>
                    <p className={styles.Profile__favoriteListItemTitle}>{obj.animeTitle}</p>
                    <div className={styles.Profile__favoritelistItemEpisodes}>
                      <span>{obj.currentAnimeSeries}</span>/ <span>{obj.episodesList.length}</span>
                    </div>
                    <button
                      className={styles.Profile__favoriteListItemButtonDeleted}
                      onClick={() => onDeletedItem(obj.animeTitle)}>
                      ??????????????
                    </button>
                  </li>
                ))}
              </ul>
            </div>
            <div className={styles.Profile__favorites}>
              <h1 className={styles.Profile__favoritesTitle}>Planned</h1>
              <ul className={styles.Profile__favoriteList}>
                {plannedArray.map((obj) => (
                  <li key={obj.animeTitle} className={styles.Profile__favoriteListItem}>
                    <p className={styles.Profile__favoriteListItemTitle}>{obj.animeTitle}</p>
                    <div className={styles.Profile__favoritelistItemEpisodes}>
                      <span>{obj.currentAnimeSeries}</span>/ <span>{obj.episodesList.length}</span>
                    </div>
                    <button
                      className={styles.Profile__favoriteListItemButtonDeleted}
                      onClick={() => onDeletedPlannedItem(obj.animeTitle)}>
                      ??????????????
                    </button>
                  </li>
                ))}
              </ul>
            </div>
            <div className={styles.Profile__favorites}>
              <h1 className={styles.Profile__favoritesTitle}>Reviewing</h1>
              <ul className={styles.Profile__favoriteList}>
                {reviewingArray.map((obj) => (
                  <li key={obj.animeTitle} className={styles.Profile__favoriteListItem}>
                    <p className={styles.Profile__favoriteListItemTitle}>{obj.animeTitle}</p>
                    <div className={styles.Profile__favoritelistItemEpisodes}>
                      <span>{obj.currentAnimeSeries}</span>/ <span>{obj.episodesList.length}</span>
                    </div>
                    <button
                      className={styles.Profile__favoriteListItemButtonDeleted}
                      onClick={() => onDeletedReviewingItem(obj.animeTitle)}>
                      ??????????????
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          </main>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Profile;
