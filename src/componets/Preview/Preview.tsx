import React, { useEffect } from 'react';
import styles from './Preview.module.scss';
import R from '../../assets/images/icons/R.svg';
import HD from '../../assets/images/icons/4K.svg';
import DUB from '../../assets/images/icons/DUB.svg';
import SUB from '../../assets/images/icons/SUB.svg';
import { useSelector } from 'react-redux';
import { tokyoRevenger } from '../../redux/animeSlice/selectors';
import { useAppDispatch } from '../../redux/store';
import { fetchTokyoRevenger } from '../../redux/animeSlice/asyncAction';
import { setItems } from '../../redux/profileSlice/profileSlice';
import { Link } from 'react-router-dom';

const Preview: React.FC = () => {
  const tokyoRevengers = useSelector(tokyoRevenger);
  const iconArray = [R, HD, DUB, SUB];
  const dispatch = useAppDispatch();

  console.log(tokyoRevengers);

  useEffect(() => {
    dispatch(fetchTokyoRevenger());
  }, [dispatch]);

  const onClickAddListButton = () => {
    if (tokyoRevengers) {
      dispatch(setItems(tokyoRevengers));
    }
  };
  return (
    <div className={styles.preview}>
      <p className={styles.preview__spotlight}>#1 Spotlight</p>
      <h1 className={styles.preview__title}>Tokyo Revengers: Christmas Showdown</h1>
      <div className={styles.preview__listContaier}>
        <ul className={styles.preview__iconList}>
          {iconArray.map((icon, index) => (
            <li key={index}>
              <img src={icon} alt="icon" />
            </li>
          ))}
        </ul>
        <ul className={styles.preview__seriesList}>
          <li className={styles.preview__seriesListItem}>TV</li>
          <li className={styles.preview__seriesListItem}>Ep 1 / ? </li>
          <li className={styles.preview__seriesListItem}>24m</li>
        </ul>
      </div>
      <p className={styles.preview__description}>
        Watching the news, Takemichi Hanagaki learns that his girlfriend from way back in middle
        school, Hinata Tachibana, has died. The only girlfriend he ever had was just killed by a
        villainous group known as the Tokyo Manji Gang. He lives in a crappy apartment with t...More
      </p>
      <div className={styles.preview__buttonsContainer}>
        <Link
          to={`/anime/tokyo-revengers-seiya-kessen-hen`}
          className={styles.preview__buttonsContainer_watchLink}>
          Watch Now
        </Link>
        <button
          onClick={onClickAddListButton}
          className={styles.preview__buttonsContainer_addToList}>
          Add to list
        </button>
      </div>
    </div>
  );
};

export default Preview;
