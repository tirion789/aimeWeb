import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import Footer from '../../componets/Footer/Footer';
import Header from '../../componets/Header/Header';
import { deleteAnimes } from '../../redux/profileSlice/profileSlice';
import { profile } from '../../redux/profileSlice/selectors';
import { useAppDispatch } from '../../redux/store';
import styles from './Profile.module.scss';

const Profile = () => {
  const profileArray = useSelector(profile);
  const dispatch = useAppDispatch();
  useEffect(() => {
    const massives = JSON.stringify(profileArray);
    localStorage.setItem('favorite', massives);
  }, [profileArray]);

  const onDeletedItem = (value: string) => {
    dispatch(deleteAnimes(value));
    localStorage.setItem('anime' + value, JSON.stringify(false));
  };

  return (
    <div className={styles.wrapper}>
      <Header />
      <div className={styles.Profile__background}>
        <div className={styles.Profile__overlay}>
          <main className={styles.Profile}>
            <div className={styles.Profile__favorite}>
              <h1>Favorites</h1>
              <ul className={styles.Profile__favoriteList}>
                {profileArray.map((obj) => (
                  <li className={styles.Profile__favoriteListItem}>
                    <p className={styles.Profile__favoriteListItemTitle}>Name / {obj.animeTitle}</p>
                    <span className={styles.Profile__favoritelistItemEpisodes}>
                      0 / {obj.episodesList.length}
                    </span>
                    <button onClick={() => onDeletedItem(obj.animeTitle)} style={{ color: 'red' }}>
                      Удалить
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          </main>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Profile;
