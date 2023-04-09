import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Footer from '../../componets/Footer/Footer';
import Header from '../../componets/Header/Header';
import Pagination from '../../componets/Pagination/Pagination';
import {
  formatSelector,
  genreTextSelector,
  seasonSelector,
  typeSelector,
} from '../../redux/filterSlice/selectors';
import styles from './GenrePage.module.scss';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import Filter from '../../componets/Filters/Filters';
import { setFormat, setGenre, setSeason, setType } from '../../redux/filterSlice/filterSlice';
import { formatArray, genreArray, seasonArray, typeArray } from '../../common/const';
import { useGetFiltersAnimeQuery } from '../../redux/api/asyncAction';
import Loader from '../../componets/Loader/Loader';
import { usePagination } from '../../hooks/usePagination';

const GenrePage = () => {
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

  const { data, isFetching } = useGetFiltersAnimeQuery(
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

  if (isFetching) {
    return <Loader />;
  }

  if (!data) {
    return <Loader />;
  }

  return (
    <>
      <Header />
      <main className={styles.GenrePage}>
        <div className={styles.GenrePage__overlay}>
          {/* <h1 className={styles.GenrePage__title}>{genreText}</h1> */}
          <div className={styles.GenrePage__filtersContainer}>
            {filtersMap.map((props, index) => (
              <Filter key={index} {...props} />
            ))}
          </div>
          <ul className={styles.GenrePage__list}>
            {data?.results.map(({ id, image, title }) => (
              <li key={id} className={styles.GenrePage__listItem}>
                <Link to={`/anime/${id}`}>
                  <img
                    className={styles.GenrePage__image}
                    width={257}
                    height={400}
                    src={image}
                    alt="imageAnime"
                  />
                  <div className={styles.GenrePage__container}>
                    <h2 className={styles.GenrePage__listItemName}>{title.romaji}</h2>
                  </div>
                </Link>
              </li>
            ))}
          </ul>
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
    </>
  );
};

export default GenrePage;
