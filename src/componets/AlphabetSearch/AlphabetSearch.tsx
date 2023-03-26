import React from 'react';
import { AlphabetArray } from '../../common/const';
import { useAppDispatch } from '../../redux/store';
import styles from './AlphabetSearch.module.scss';
import { Link } from 'react-router-dom';
import { setLetter } from '../../redux/filterSlice/filterSlice';

const AlphabetSearch = () => {
  const dispatch = useAppDispatch();

  const onClickLetter = (latter: string) => {
    dispatch(setLetter(latter));
  };

  return (
    <div className={styles.AlphabetSearch}>
      <div>
        <div className={styles.AlphabetSearch__container}>
          <h2 className={styles.AlphabetSearch__header}>A-Z List</h2>
          <p className={styles.AlphabetSearch__title}>
            Searching anime order by alphabet name A to Z.
          </p>
        </div>
        <ul className={styles.AlphabetSearch__list}>
          {AlphabetArray.map((latter) => (
            <li key={latter} className={styles.AlphabetSearch__listItem}>
              <Link
                className={styles.AlphabetSearch__listItemLink}
                onClick={() => onClickLetter(latter)}
                to={`/AlphabetAnime/${latter}`}>
                {latter}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default AlphabetSearch;
