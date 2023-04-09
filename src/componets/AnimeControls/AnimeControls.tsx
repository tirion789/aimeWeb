import React, { useEffect, useState } from 'react';
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
import { ReactComponent as Sort } from '../../assets/images/icons/sort.svg';
import { AnimeControlsInterface } from './AnimeControlsInterface';

const buttonsList = Object.values(ListNames);

const AnimeControls = ({ currentAnime }: AnimeControlsInterface) => {
  const [showHiddenButton, setShowHiddenButton] = useState(false);
  const currentActiveButton = useAppSelector(activeButtonSelector);
  const currentAnimeListName = useAppSelector((state) =>
    getAnimeListNameSelector(state, currentAnime?.title.romaji),
  );
  const dispatch = useAppDispatch();

  const filteredButtons = currentActiveButton
    ? buttonsList.filter((button) => button !== currentActiveButton)
    : buttonsList;

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
      <button className={styles.AnimeControls__showButton} onClick={handleShowHiddenButtons}>
        {!showHiddenButton ? (
          <Sort width={30} height={30} />
        ) : (
          <Sort width={30} height={30} transform="rotate(180)" />
        )}
      </button>
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
