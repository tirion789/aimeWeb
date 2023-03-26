import React from 'react';
import { useSelector } from 'react-redux';
import Footer from '../../componets/Footer/Footer';
import Header from '../../componets/Header/Header';
import ProfileList from '../../componets/ProfileList/ProfileList';
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
      <main className={styles.Profile__background}>
        <div className={styles.Profile__overlay}>
          <main className={styles.Profile}>
            {profileListMap.map((props) => (
              <ProfileList {...props} />
            ))}
          </main>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Profile;
