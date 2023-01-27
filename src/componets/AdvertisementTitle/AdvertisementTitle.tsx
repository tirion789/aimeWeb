import React from 'react';
import styles from './AdvertisementTitle.module.scss';

const AdvertisementTitle = () => {
  return (
    <div className={styles.AdvertisementTitle}>
      <div className={styles.AdvertisementTitle__imageContainer}>
        <img
          src="https://animecorner.me/wp-content/uploads/2023/01/04_02.jpg"
          alt="Don't Toy with Me, Miss Nagatoro"
        />
      </div>
      <div className={styles.AdvertisementTitle__informationContainer}>
        <h2>Don't Toy with Me, Miss Nagatoro </h2>
        <h3>2nd Season</h3>
        <p>
          "A girl in a lower grade just made me cry!" One day, Senpai visits the library after
          school and becomes the target of a super sadistic junior! The name of the girl who teases,
          torments, and tantalizes Senpai is "Nagatoro!" She's annoying yet adorable. It's painf...
          More
        </p>
        <div className={styles.AdvertisementTitle__buttonContainer}>
          <a href="/">Watch Now</a>
          <button>Add to list</button>
        </div>
      </div>
    </div>
  );
};

export default AdvertisementTitle;
