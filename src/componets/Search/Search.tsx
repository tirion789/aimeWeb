import React, { ChangeEvent, useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchSearchAnime } from '../../redux/animeSlice/asyncAction';
import { search } from '../../redux/animeSlice/selectors';
import { useAppDispatch } from '../../redux/store';
import { debounce } from 'lodash';
import styles from './Search.module.scss';

const Search = () => {
  const [value, setValue] = useState('');
  const dispatch = useAppDispatch();

  const searchAnime = useSelector(search);

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

  return (
    <div className={styles.Search}>
      <input
        onChange={onChangeSearch}
        placeholder="Search anime"
        className={styles.Search__input}
        type="text"
      />
      <ul className={styles.Search__list}>
        {searchAnime.slice(0, 5).map((obj) => (
          <li>
            <Link to={`/anime/${obj.animeId}`}>
              <p>{obj.animeTitle}</p>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Search;
