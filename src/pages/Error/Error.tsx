import React from 'react';
import styles from './Error.module.scss';
import Header from '../../componets/Header/Header';
import Footer from '../../componets/Footer/Footer';

const Error = () => {
  return (
    <div className={styles.wrapper}>
      <Header />
      <div className={styles.Error}>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <h1>Something seems to have gone wrong. Try to reload the page, or come back later</h1>
          <img
            className={styles.Image}
            width={200}
            height={350}
            src="https://i.gifer.com/1Nez.gif"
            alt=""
          />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Error;
