import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { currentItem } from '../../redux/animeSlice/selectors';
import {
  setActiveButton,
  setItems,
  setPlanned,
  setReviewing,
} from '../../redux/profileSlice/profileSlice';
import { activeButton, getAnimeListName } from '../../redux/profileSlice/selectors';
import { listNames } from '../../redux/profileSlice/types';
import { useAppDispatch, useAppSelector } from '../../redux/store';
import styles from './AnimeControls.module.scss';
const buttonsMap = Object.values(listNames);

const AnimeControls = () => {
  const [showHiddenButton, setShowHiddenButton] = useState(false);
  // const [activeButton, setActiveButton] = useState('planned');
  const currentActiveButton = useSelector(activeButton);
  const currentAnime = useSelector(currentItem);
  const currentAnimeListName = useAppSelector((state) =>
    getAnimeListName(state, currentAnime?.animeTitle),
  );
  const dispatch = useAppDispatch();
  const filteredButtons = currentActiveButton
    ? buttonsMap.filter((button) => button !== currentActiveButton)
    : buttonsMap;
  const onButtonClick = (button: listNames) => {
    dispatch(setActiveButton(button));
    if (currentAnime && button === listNames.FAVORITES) {
      dispatch(setItems(currentAnime));
    }
    if (currentAnime && button === listNames.PLANNED) {
      dispatch(setPlanned(currentAnime));
    }
    if (currentAnime && button === listNames.REVIEWING) {
      dispatch(setReviewing(currentAnime));
    }
  };

  console.log(currentAnimeListName);

  const onButtonClickActive = () => {
    if (currentAnime && currentActiveButton === listNames.PLANNED && !currentAnimeListName) {
      dispatch(setPlanned(currentAnime));
    }
    if (currentAnime && currentActiveButton === listNames.FAVORITES && !currentAnimeListName) {
      dispatch(setItems(currentAnime));
    }
    if (currentAnime && currentActiveButton === listNames.REVIEWING && !currentAnimeListName) {
      dispatch(setReviewing(currentAnime));
    }
  };

  const onShowHiddenButtons = () => {
    setShowHiddenButton((prev) => !prev);
  };

  useEffect(() => {
    if (currentAnimeListName) {
      dispatch(setActiveButton(currentAnimeListName));
    }
  }, [currentAnime, currentAnimeListName, dispatch]);

  return (
    <div className={styles.AnimeControls}>
      <button onClick={onShowHiddenButtons}>show</button>
      <button
        onClick={onButtonClickActive}
        className={`${
          currentAnimeListName ? styles.AnimeControls__activeButton : styles.AnimeControls__button
        }`}>
        {currentActiveButton}
      </button>
      {filteredButtons.map((button, index) => (
        <ul
          key={index}
          className={`${
            showHiddenButton ? styles.AnimeControls__hiddenBtnShow : styles.AnimeControls__hiddenBtn
          }`}>
          <li>
            <button onClick={() => onButtonClick(button)} className={styles.AnimeControls__button}>
              {button}
            </button>
          </li>
        </ul>
      ))}
    </div>
  );
};

export default AnimeControls;
