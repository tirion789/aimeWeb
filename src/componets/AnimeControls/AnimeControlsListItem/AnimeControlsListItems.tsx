import React from 'react';
import {
  setActiveButton,
  setItems,
  setPlanned,
  setReviewing,
} from '../../../redux/profileSlice/profileSlice';
import { ListNames } from '../../../redux/profileSlice/types';
import styles from './AnimeControlsListItems.module.scss';
import { AnimeControlsListItemProps } from './interface';
import { useAppDispatch } from '../../../redux/hooks';
import { getToast } from '../../../common/util';

const AnimeControlsListItems = ({ button, key, currentAnime }: AnimeControlsListItemProps) => {
  const dispatch = useAppDispatch();

  const handleButtonClick = (button: ListNames) => {
    dispatch(setActiveButton(button));
    if (currentAnime && button === ListNames.FAVORITES) {
      dispatch(setItems(currentAnime));
      getToast(currentAnime.title.romaji, 'favorites');
    }
    if (currentAnime && button === ListNames.PLANNED) {
      dispatch(setPlanned(currentAnime));
      getToast(currentAnime.title.romaji, 'planned');
    }
    if (currentAnime && button === ListNames.REVIEWING) {
      dispatch(setReviewing(currentAnime));
      getToast(currentAnime.title.romaji, 'reviewing');
    }
  };
  return (
    <li key={key}>
      <button onClick={() => handleButtonClick(button)} className={styles.AnimeControlsButton}>
        {button}
      </button>
    </li>
  );
};

export default AnimeControlsListItems;
