import React, { ChangeEvent, useState } from 'react';
import { Link } from 'react-router-dom';
import { useGetSearchAnimeQuery } from '../../redux/api/query';
import { debounce } from 'lodash';
import styles from './Search.module.scss';
import { ReactComponent as SearchImg } from '../../assets/images/icons/search.svg';

const Search = () => {
  const LAST_INDEX_ELEMENT_SLICE_ARRAY = 5;
  const FIRST_INDEX_ELEMENT_SLICE_ARRAY = 0;
  const SEARCH_DELAY = 700;

  const [value, setValue] = useState('');
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  const { data, isFetching } = useGetSearchAnimeQuery(value);

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
      {isFetching ? (
        <p className={styles.Loading}>Loading...</p>
      ) : (
        !!data?.results.length && (
          <ul className={styles.List}>
            {data?.results
              .slice(FIRST_INDEX_ELEMENT_SLICE_ARRAY, LAST_INDEX_ELEMENT_SLICE_ARRAY)
              .map((obj) => (
                <li>
                  <Link to={`/anime/${obj.id}`}>
                    <p>{obj.title.romaji}</p>
                  </Link>
                </li>
              ))}
          </ul>
        )
      )}
    </div>
  );
};

export default Search;
