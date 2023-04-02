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

const AnimeControlsListItems = ({ button, key, currentAnime }: AnimeControlsListItemProps) => {
  const dispatch = useAppDispatch();

  const onButtonClick = (button: ListNames) => {
    dispatch(setActiveButton(button));
    if (currentAnime && button === ListNames.FAVORITES) {
      dispatch(setItems(currentAnime));
    }
    if (currentAnime && button === ListNames.PLANNED) {
      dispatch(setPlanned(currentAnime));
    }
    if (currentAnime && button === ListNames.REVIEWING) {
      dispatch(setReviewing(currentAnime));
    }
  };
  return (
    <li key={key}>
      <button onClick={() => onButtonClick(button)} className={styles.AnimeControlsButton}>
        {button}
      </button>
    </li>
  );
};

export default AnimeControlsListItems;
