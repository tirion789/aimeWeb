import React from 'react';
import AdvertisementTitle from '../../componets/AdvertisementTitle/AdvertisementTitle';
import Upcoming from '../../componets/Upcoming/Upcoming';
import Header from '../../componets/Header/Header';
import Preview from '../../componets/Preview/Preview';
import styles from './Home.module.scss';
import AlphabetSearch from '../../componets/AlphabetSearch/AlphabetSearch';
import Footer from '../../componets/Footer/Footer';
import MostPopular from '../../componets/MostPopular/MostPopular';
import TopAiring from '../../componets/TopAiring/TopAiring';

const Home: React.FC = () => {
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
            <MostPopular />
            <TopAiring />
          </div>
        </div>
        <div className={styles.mainBackground}>
          <div className={styles.mainOverlay}>
            <AdvertisementTitle />
            <Upcoming />
            <AlphabetSearch />
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Home;
