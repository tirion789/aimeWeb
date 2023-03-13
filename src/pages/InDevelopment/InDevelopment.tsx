import React from 'react';
import styles from './InDevelopment.module.scss';
// import girl from '../../assets/images/icons/girl.svg';
import developer from '../../assets/images/icons/developer.svg';
import Footer from '../../componets/Footer/Footer';
import Header from '../../componets/Header/Header';

const InDevelopment = () => {
  return (
    <div className={styles.wrapper}>
      <Header />
      <div className={styles.InDevelopment}>
        <div className={styles.InDevelopment__overlay}>
          <div className={styles.InDevelopment__text}>this page coming soon, i think...</div>
          <div style={{ width: '50%' }}>
            <img width="100%" height={768} src={developer} alt="rain" />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default InDevelopment;
