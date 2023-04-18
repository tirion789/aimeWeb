import React, { ChangeEvent, useState } from 'react';
import { Link } from 'react-router-dom';
import { useGetSearchAnimeQuery } from '../../redux/api/query';
import { debounce } from 'lodash';
import styles from './Search.module.scss';
import { ReactComponent as SearchImg } from '../../assets/images/icons/search.svg';
import Loader from '../Loader/Loader';

const Search = () => {
  const LAST_INDEX_ELEMENT_SLICE_ARRAY = 5;
  const FIRST_INDEX_ELEMENT_SLICE_ARRAY = 0;
  const SEARCH_DELAY = 700;

  const [value, setValue] = useState('');
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  const { data, isFetching } = useGetSearchAnimeQuery(value);

  console.log(data);

  const onChangeValue = (text: string) => {
    setValue(text);
  };

  const updateSearchValue = debounce((str: string) => {
    onChangeValue(str);
  }, SEARCH_DELAY);

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
        className={`${styles.Input} ${isSearchOpen && styles.ButtonActive}`}
        type="text"
      />
      <button onClick={onClickSearchButton} className={styles.InputButton}>
        <SearchImg />
      </button>
      {!!data?.results.length && (
        <ul className={styles.List}>
          {data?.results
            .slice(FIRST_INDEX_ELEMENT_SLICE_ARRAY, LAST_INDEX_ELEMENT_SLICE_ARRAY)
            .map((obj) =>
              isFetching ? (
                <Loader />
              ) : (
                <li>
                  <Link to={`/anime/${obj.id}`}>
                    <p>{obj.title.romaji}</p>
                  </Link>
                </li>
              ),
            )}
        </ul>
      )}
    </div>
  );
};

export default Search;
