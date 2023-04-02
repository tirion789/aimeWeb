import React, { useEffect, useState } from 'react';
import { currentItemSelector } from '../../redux/animeSlice/selectors';
import {
  setActiveButton,
  setItems,
  setPlanned,
  setReviewing,
} from '../../redux/profileSlice/profileSlice';
import { activeButtonSelector, getAnimeListNameSelector } from '../../redux/profileSlice/selectors';
import { ListNames } from '../../redux/profileSlice/types';
import styles from './AnimeControls.module.scss';
import AnimeControlsListItems from './AnimeControlsListItem/AnimeControlsListItems';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';

const buttonsList = Object.values(ListNames);

const AnimeControls = () => {
  const [showHiddenButton, setShowHiddenButton] = useState(false);
  // const [activeButton, setActiveButton] = useState('planned');
  const currentActiveButton = useAppSelector(activeButtonSelector);
  const currentAnime = useAppSelector(currentItemSelector);
  const currentAnimeListName = useAppSelector((state) =>
    getAnimeListNameSelector(state, currentAnime?.animeTitle),
  );
  const dispatch = useAppDispatch();
  const filteredButtons = currentActiveButton
    ? buttonsList.filter((button) => button !== currentActiveButton)
    : buttonsList;

  console.log(currentAnimeListName);

  const handleButtonClickActive = () => {
    if (currentAnime && currentActiveButton === ListNames.PLANNED && !currentAnimeListName) {
      dispatch(setPlanned(currentAnime));
    }
    if (currentAnime && currentActiveButton === ListNames.FAVORITES && !currentAnimeListName) {
      dispatch(setItems(currentAnime));
    }
    if (currentAnime && currentActiveButton === ListNames.REVIEWING && !currentAnimeListName) {
      dispatch(setReviewing(currentAnime));
    }
  };

  const handleShowHiddenButtons = () => {
    setShowHiddenButton((prev) => !prev);
  };

  useEffect(() => {
    if (currentAnimeListName) {
      dispatch(setActiveButton(currentAnimeListName));
    }
  }, [currentAnime, currentAnimeListName, dispatch]);

  return (
    <div className={styles.AnimeControls}>
      <button onClick={handleShowHiddenButtons}>show</button>
      <button
        onClick={handleButtonClickActive}
        className={`${
          currentAnimeListName ? styles.AnimeControls__activeButton : styles.AnimeControls__button
        }`}>
        {currentActiveButton}
      </button>
      <ul
        className={`${
          showHiddenButton ? styles.AnimeControls__hiddenBtnShow : styles.AnimeControls__hiddenBtn
        }`}>
        {filteredButtons.map((button, index) => (
          <AnimeControlsListItems button={button} key={index} currentAnime={currentAnime} />
        ))}
      </ul>
    </div>
  );
};

export default AnimeControls;
