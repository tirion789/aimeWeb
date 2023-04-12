import React from 'react';
import Footer from '../../componets/Footer/Footer';
import Header from '../../componets/Header/Header';
import ProfileList from '../../componets/ProfileList/ProfileList';
import {
  deleteAnimes,
  deletePlanned,
  deleteReviewing,
} from '../../redux/profileSlice/profileSlice';
import {
  favoriteSelector,
  plannedSelector,
  reviewingSelector,
} from '../../redux/profileSlice/selectors';
import styles from './Profile.module.scss';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';

const Profile = () => {
  const favoritesArray = useAppSelector(favoriteSelector);
  const plannedArray = useAppSelector(plannedSelector);
  const reviewingArray = useAppSelector(reviewingSelector);
  const dispatch = useAppDispatch();

  const onDeletedFavoriteItem = (value: string) => {
    dispatch(deleteAnimes(value));
  };

  const onDeletedPlannedItem = (value: string) => {
    dispatch(deletePlanned(value));
  };

  const onDeletedReviewingItem = (value: string) => {
    dispatch(deleteReviewing(value));
  };

  const profileListMap = [
    {
      title: 'Favorites',
      items: favoritesArray,
      handleDeleteButtonClick: onDeletedFavoriteItem,
    },
    {
      title: 'Planned',
      items: plannedArray,
      handleDeleteButtonClick: onDeletedPlannedItem,
    },
    {
      title: 'Reviewing',
      items: reviewingArray,
      handleDeleteButtonClick: onDeletedReviewingItem,
    },
  ];

  return (
    <div className={styles.wrapper}>
      <Header />
      <main className={styles.Background}>
        <div className={styles.Overlay}>
          {profileListMap.map((props, index) => (
            <ProfileList key={index} {...props} />
          ))}
        </div>
      </main>
      <footer className={styles.FooterBackground}>
        <div className={styles.FooterOverlay}>
          <Footer />
        </div>
      </footer>
    </div>
  );
};

export default Profile;
