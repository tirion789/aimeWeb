import React from 'react';
import styles from './Footer.module.scss';

const Footer = () => {
  return (
    <footer className={styles.Footer}>
      <div className={styles.Footer__background}>
        <div className={styles.Footer__overlay}>
          <div className={styles.Footer__container}>
            <div className={styles.Footer__navigation}>
              <h2 className={styles.Footer__navigationTitle}>Navigation</h2>
              <ul className={styles.Footer__navigationList}>
                <li className={styles.Footer__navigationListItem}>Browse Popular</li>
                <li className={styles.Footer__navigationListItem}>Browse Manga</li>
                <li className={styles.Footer__navigationListItem}>Release Calendar</li>
                <li className={styles.Footer__navigationListItem}>News</li>
              </ul>
            </div>
            <ul className={styles.Footer__informationList}>
              <li className={styles.Footer__informationListItem}>
                <a href="/">About</a>
              </li>
              <li className={styles.Footer__informationListItem}>
                <a href="/">Privacy Policy</a>
              </li>
              <li className={styles.Footer__informationListItem}>
                <a href="/">Disclaimer</a>
              </li>
              <li className={styles.Footer__informationListItem}>
                <a href="/">Help</a>
              </li>
              <li className={styles.Footer__informationListItem}>
                <a href="/">FAQ</a>
              </li>
            </ul>
            <div className={styles.Footer__social}>
              <h2>Account</h2>
              <ul className={styles.Footer__socialList}>
                <li>
                  <a href="/">Create Account</a>
                </li>
                <li>
                  <a href="/">Login</a>
                </li>
              </ul>
              <ul>
                <li></li>
                <li></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
