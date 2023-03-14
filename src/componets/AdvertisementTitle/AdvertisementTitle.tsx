import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchNagatoro } from '../../redux/animeSlice/asyncAction';
import { nagatoroSan } from '../../redux/animeSlice/selectors';
import { setItems } from '../../redux/profileSlice/profileSlice';
import { useAppDispatch } from '../../redux/store';
import styles from './AdvertisementTitle.module.scss';

const AdvertisementTitle = () => {
  const nagatoro = useSelector(nagatoroSan);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchNagatoro());
  }, [dispatch]);

  const onClickAddButton = () => {
    if (nagatoro) {
      dispatch(setItems(nagatoro));
    }
  };
  return (
    <div className={styles.AdvertisementTitle}>
      <div className={styles.AdvertisementTitle__imageContainer}>
        <img
          src="https://animecorner.me/wp-content/uploads/2023/01/04_02.jpg"
          alt="Don't Toy with Me, Miss Nagatoro"
        />
      </div>
      <div className={styles.AdvertisementTitle__informationContainer}>
        <h2 className={styles.AdvertisementTitle__informationContainerTitle}>
          Don't Toy with Me, Miss Nagatoro
        </h2>
        <h3>2nd Season</h3>
        <p className={styles.AdvertisementTitle__informationContainerText}>
          "A girl in a lower grade just made me cry!" One day, Senpai visits the library after
          school and becomes the target of a super sadistic junior! The name of the girl who teases,
          torments, and tantalizes Senpai is "Nagatoro!" She's annoying yet adorable. It's painf...
          More
        </p>
        <div className={styles.AdvertisementTitle__buttonContainer}>
          <Link
            to={'/anime/ijiranaide-nagatoro-san-2nd-attack'}
            className={styles.AdvertisementTitle__informationButton_watch}>
            Watch Now
          </Link>
          <button
            onClick={onClickAddButton}
            className={styles.AdvertisementTitle__informationButton_addToList}>
            Add to list
          </button>
        </div>
      </div>
    </div>
  );
};

export default AdvertisementTitle;
