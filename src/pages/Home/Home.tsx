import React from 'react';
import AdvertisementTitle from '../../componets/AdvertisementTitle/AdvertisementTitle';
import Header from '../../componets/Header/Header';
import Preview from '../../componets/Preview/Preview';
import styles from './Home.module.scss';
import AlphabetSearch from '../../componets/AlphabetSearch/AlphabetSearch';
import Footer from '../../componets/Footer/Footer';
import MainCategories from '../../componets/MainCategories/MainCategories';
import {
  useGetPopularAnimeQuery,
  useGetTopAiringAnimeQuery,
} from '../../redux/animeSlice/asyncAction';
import Loader from '../../componets/Loader/Loader';

const Home: React.FC = () => {
  const {
    data: popularAnimeArray,
    isLoading: popularLoading,
    isError: popularError,
  } = useGetPopularAnimeQuery('popular?perPage=18');
  const {
    data: trendingAnimeArray,
    isLoading: trendingLoading,
    isError: trendingError,
  } = useGetTopAiringAnimeQuery('trending?perPage=18');

  const mainCategoriesArray = [
    {
      items: popularAnimeArray?.results,
      isError: popularError,
      name: 'Most Popular',
    },
    {
      items: trendingAnimeArray?.results,
      isError: trendingError,
      name: 'Top Airing',
    },
  ];

  if (popularLoading || trendingLoading) {
    return <Loader />;
  }

  return (
    <div className={styles.wrapper}>
      <Header />
      <main>
        <div className={styles.preview__container}>
          <Preview items={trendingAnimeArray?.results[2]} loading={trendingLoading} />
        </div>
        <div className={styles.Recommended}>
          <div className={styles.Recommended__overlay}>
            {mainCategoriesArray.map((props, index) => (
              <MainCategories key={index} {...props} />
            ))}
          </div>
        </div>
        <div className={styles.mainBackground}>
          <div className={styles.mainOverlay}>
            <AdvertisementTitle />
            <AlphabetSearch />
          </div>
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

export default Home;
