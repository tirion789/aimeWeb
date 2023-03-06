import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { currentItem } from '../../redux/animeSlice/selectors';
import {
  deletePlanned,
  setItems,
  setPlanned,
  setReviewing,
} from '../../redux/profileSlice/profileSlice';
import { getAnimeListName } from '../../redux/profileSlice/selectors';
import { useAppDispatch, useAppSelector } from '../../redux/store';
import styles from './AnimeControls.module.scss';
const buttonsMap = ['planned', 'favorite', 'reviewing'];

const AnimeControls = () => {
  const [activeButton, setActiveButton] = useState('planned');
  const [showHiddenButton, setShowHiddenButton] = useState(false);
  const [tick, setTick] = useState(false);
  const currentAnime = useSelector(currentItem);
  const state = localStorage.getItem('tick' + currentAnime?.animeTitle);
  const currentAnimeListName = useAppSelector((state) =>
    getAnimeListName(state, currentAnime?.animeTitle),
  );
  const dispatch = useAppDispatch();
  const filteredButtons = activeButton
    ? buttonsMap.filter((button) => button !== activeButton)
    : buttonsMap;
  const onButtonClick = (button: string) => {
    setActiveButton(button);
    if (currentAnime && button === 'favorite') {
      dispatch(setItems(currentAnime));
    }
    if (currentAnime && button === 'planned') {
      dispatch(setPlanned(currentAnime));
    }
    if (currentAnime && button === 'reviewing') {
      dispatch(setReviewing(currentAnime));
    }
    setTick(true);
    localStorage.setItem('tick' + currentAnime?.animeTitle, JSON.stringify(true));
  };

  const onButtonClickActive = () => {
    if (currentAnime && activeButton === 'planned') {
      dispatch(deletePlanned(currentAnime.animeTitle));
      dispatch(setPlanned(currentAnime));
    }
    localStorage.setItem('tick' + currentAnime?.animeTitle, JSON.stringify(true));
  };

  const onShowHiddenButtons = () => {
    setShowHiddenButton((prev) => !prev);
  };

  useEffect(() => {
    if (currentAnimeListName) {
      setTick(Boolean(JSON.parse(state || 'null')));
      setActiveButton(currentAnimeListName);
    }
  }, [currentAnime, currentAnimeListName, dispatch, state]);

  return (
    <div className={styles.AnimeControls}>
      <button onClick={onShowHiddenButtons}>show</button>
      <button
        onClick={onButtonClickActive}
        className={`${tick ? styles.AnimeControls__activeButton : styles.AnimeControls__button}`}>
        {activeButton}
      </button>
      {filteredButtons.map((button) => (
        <ul
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
