import React, { useEffect } from 'react';
import Footer from '../../componets/Footer/Footer';
import Header from '../../componets/Header/Header';
import Pagination from '../../componets/Pagination/Pagination';
import {
  formatSelector,
  genreTextSelector,
  seasonSelector,
  typeSelector,
} from '../../redux/filterSlice/selectors';
import styles from './FiltersPage.module.scss';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import Filter from '../../componets/Filters/Filters';
import { setFormat, setGenre, setSeason, setType } from '../../redux/filterSlice/filterSlice';
import { formatArray, genreArray, seasonArray, typeArray } from '../../common/const';
import { useGetFiltersAnimeQuery } from '../../redux/api/query';
import Loader from '../../componets/Loader/Loader';
import { usePagination } from '../../hooks/usePagination';
import FiltersListItem from './FiltersListItem/FiltersListItem';

const FiltersPage = () => {
  const genreText = useAppSelector(genreTextSelector);
  const type = useAppSelector(typeSelector);
  const season = useAppSelector(seasonSelector);
  const format = useAppSelector(formatSelector);
  const dispatch = useAppDispatch();

  const buttonsArray = Array.from({ length: 100 }, (_, i = 1) => i + 1);
  const {
    handleClickOnFirstPage,
    handleClickOnLastPage,
    handlePaginationClickNext,
    handlePaginationClickPrev,
    handleClickPaginationButton,
    lastIndexSlice,
    firestIndexSlice,
    currentPaginationButton,
  } = usePagination(buttonsArray);

  const { data, isFetching, isLoading } = useGetFiltersAnimeQuery(
    `type=${type}&page=${currentPaginationButton}${
      genreText === 'Any' ? '' : `&genres=["${genreText}"]`
    }${season === 'Any' ? '' : `&season=${season}`}${format === 'Any' ? '' : `&format=${format}`}`,
  );

  const handleClickCurrentGenre = (value: string) => {
    dispatch(setGenre(value));
  };

  const handleClickCurrentSeason = (value: string) => {
    dispatch(setSeason(value));
  };

  const handleClickCurrentFormat = (value: string) => {
    dispatch(setFormat(value));
  };

  const handleClickCurrentType = (value: string) => {
    dispatch(setType(value));
  };

  const filtersMap = [
    {
      title: genreText,
      handleClickCurrentInput: handleClickCurrentGenre,
      items: genreArray,
      header: 'Filter',
      disabled: false,
    },
    {
      title: season,
      handleClickCurrentInput: handleClickCurrentSeason,
      items: seasonArray,
      header: 'Season',
      disabled: true,
    },
    {
      title: format,
      handleClickCurrentInput: handleClickCurrentFormat,
      items: formatArray,
      header: 'Format',
      disabled: true,
    },
    {
      title: type,
      handleClickCurrentInput: handleClickCurrentType,
      items: typeArray,
      header: 'Type',
      disabled: false,
    },
  ];

  useEffect(() => {
    if (type === 'MANGA') {
      dispatch(setFormat('Any'));
      dispatch(setSeason('Any'));
    }
  }, [dispatch, type]);

  if (isLoading) {
    return <Loader />;
  }

  return (
    <div className="wrapper">
      <Header />
      <main className={styles.FiltersPage}>
        <div className={styles.Overlay}>
          <div className={styles.FiltersContainer}>
            {filtersMap.map((props, index) => (
              <Filter key={index} {...props} />
            ))}
          </div>
          {isFetching ? (
            <Loader />
          ) : (
            <ul className={styles.List}>
              {data?.results.map((props) => (
                <FiltersListItem {...props} />
              ))}
            </ul>
          )}
          <Pagination
            buttonsArray={buttonsArray}
            handleClickOnFirstPage={handleClickOnFirstPage}
            handleClickOnLastPage={handleClickOnLastPage}
            handlePaginationClickNext={handlePaginationClickNext}
            handlePaginationClickPrev={handlePaginationClickPrev}
            currentPaginationButton={currentPaginationButton}
            firestIndexSlice={firestIndexSlice}
            lastIndexSlice={lastIndexSlice}
            handleClickPaginationButton={handleClickPaginationButton}
          />
        </div>
      </main>
      <footer className={styles.FooterBackground}>
        <div className={styles.FooterOverlay}>
          <Footer />
        </div>
      </footer>
    </div>
  );
};

export default FiltersPage;
