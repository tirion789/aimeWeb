import React from 'react';
import AdvertisementTitle from '../../componets/AdvertisementTitle/AdvertisementTitle';
import Upcoming from '../../componets/Upcoming/Upcoming';
import Header from '../../componets/Header/Header';
import Preview from '../../componets/Preview/Preview';
import Recommended from '../../componets/Recommended/Recommended';
import styles from './Home.module.scss';
import AlphabetSearch from '../../componets/AlphabetSearch/AlphabetSearch';
import Footer from '../../componets/Footer/Footer';

const Home: React.FC = () => {
  fetch('https://gogoanime.consumet.stream/popular')
    .then((response) => response.json())
    .then((animelist) => console.log(animelist));

  return (
    <div className={styles.wrapper}>
      <Header />
      <main>
        <div className={styles.previewBackground}>
          <div className={styles.previewOverlay}>
            <Preview />
          </div>
        </div>
        <Recommended />
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
