import React, { ChangeEvent, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { fetchSearchAnime } from '../../redux/animeSlice/asyncAction';
import { searchSelector } from '../../redux/animeSlice/selectors';
import { debounce } from 'lodash';
import styles from './Search.module.scss';
import { ReactComponent as SearchImg } from '../../assets/images/icons/search.svg';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';

const Search = () => {
  const [value, setValue] = useState('');
  const dispatch = useAppDispatch();
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  const searchAnime = useAppSelector(searchSelector);

  useEffect(() => {
    dispatch(fetchSearchAnime(value));
  }, [dispatch, value]);

  const onChangeValue = (text: string) => {
    setValue(text);
  };

  const updateSearchValue = debounce((str: string) => {
    onChangeValue(str);
  }, 500);

  const onChangeSearch = (event: ChangeEvent<HTMLInputElement>) => {
    updateSearchValue(event.target.value);
  };

  const onClickSearchButton = () => {
    setIsSearchOpen((prev) => !prev);
  };

  return (
    <div className={styles.Search}>
      <input
        onChange={onChangeSearch}
        placeholder="Search anime"
        className={`${styles.Search__input} ${isSearchOpen && styles.Search__buttonActive}`}
        type="text"
      />
      <button onClick={onClickSearchButton} className={styles.Search__inputButton}>
        <SearchImg />
      </button>
      {!!searchAnime.length && (
        <ul className={styles.Search__list}>
          {searchAnime.slice(0, 5).map((obj) => (
            <li>
              <Link to={`/anime/${obj.animeId}`}>
                <p>{obj.animeTitle}</p>
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Search;
