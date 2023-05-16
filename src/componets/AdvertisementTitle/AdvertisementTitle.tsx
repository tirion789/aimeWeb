import React from 'react';
import { deleteAnimes, setItems } from '../../redux/profileSlice/profileSlice';
import styles from './AdvertisementTitle.module.scss';
import { useGetAnimeNagataroQuery } from '../../redux/api/query';
import { useAppDispatch } from '../../redux/hooks';
import PrewiewButtons from '../PrewiewButtons/PrewiewButton';
import { deleteAnimeToast, getToast } from '../../common/util';

const AdvertisementTitle = () => {
  const dispatch = useAppDispatch();

  const { data: nagatoro } = useGetAnimeNagataroQuery('/info/140596');

  const handleClickAddButton = () => {
    if (nagatoro) {
      dispatch(setItems(nagatoro));
      getToast(nagatoro.title.romaji, 'favorites');
    }
  };
  const handleClickDeleteFromList = () => {
    if (nagatoro) {
      dispatch(deleteAnimes(nagatoro?.title.romaji));
      deleteAnimeToast(nagatoro?.title.romaji, 'favorites');
    }
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
        <PrewiewButtons
          item={nagatoro?.id}
          title={nagatoro?.title.romaji}
          handleAdd={handleClickAddButton}
          handleDelete={handleClickDeleteFromList}
        />
      </div>
    </div>
  );
};

export default AdvertisementTitle;
