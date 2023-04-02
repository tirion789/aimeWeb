import React from 'react';
import AdvertisementTitle from '../../componets/AdvertisementTitle/AdvertisementTitle';
import Header from '../../componets/Header/Header';
import Preview from '../../componets/Preview/Preview';
import styles from './Home.module.scss';
import AlphabetSearch from '../../componets/AlphabetSearch/AlphabetSearch';
import Footer from '../../componets/Footer/Footer';
import MainCategories from '../../componets/MainCategories/MainCategories';
import {
  statusTopAiringSelector,
  statusPopularSelector,
  topAiringAnimesSelector,
  popularAnimesSelector,
} from '../../redux/animeSlice/selectors';
import { useAppSelector } from '../../redux/hooks';

const Home: React.FC = () => {
  const popularAnimesArray = useAppSelector(popularAnimesSelector);
  const topAiringAnimesArray = useAppSelector(topAiringAnimesSelector);
  const statusPopularAnimes = useAppSelector(statusPopularSelector);
  const statusTopAiringAnimes = useAppSelector(statusTopAiringSelector);

  const mainCategoriesArray = [
    {
      items: popularAnimesArray,
      status: statusPopularAnimes,
      name: 'Most Popular',
    },
    {
      items: topAiringAnimesArray,
      status: statusTopAiringAnimes,
      name: 'Top Airing',
    },
  ];

  return (
    <div className={styles.wrapper}>
      <Header />
      <main>
        <div className={styles.previewBackground}>
          <div className={styles.previewOverlay}>
            <Preview />
          </div>
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
