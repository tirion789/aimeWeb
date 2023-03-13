import React from 'react';
import { AlphabetArray } from '../../common/const';
import { useAppDispatch } from '../../redux/store';
import styles from './AlphabetSearch.module.scss';
import { MouseEvent } from 'react';
import { Link } from 'react-router-dom';
import { setLetter } from '../../redux/filterSlice/filterSlice';

const AlphabetSearch = () => {
  const dispatch = useAppDispatch();

  const onClickLetter = (event: MouseEvent<HTMLAnchorElement>) => {
    const target = event.target as HTMLAnchorElement;
    dispatch(setLetter(target.innerHTML));
  };

  return (
    <div className={styles.AlphabetSearch}>
      <div>
        <h2>A-Z List</h2>
        <p className={styles.AlphabetSearch__title}>
          Searching anime order by alphabet name A to Z.
        </p>
        <ul className={styles.AlphabetSearch__list}>
          {AlphabetArray.map((latter) => (
            <li key={latter} className={styles.AlphabetSearch__listItem}>
              <Link onClick={onClickLetter} to={`/AlphabetAnime/${latter}`}>
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
