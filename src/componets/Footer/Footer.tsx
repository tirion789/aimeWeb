import React from 'react';
import { Link } from 'react-router-dom';
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
                <li className={styles.Footer__listItem}>Browse Popular</li>
                <li className={styles.Footer__listItem}>Browse Manga</li>
                <li className={styles.Footer__listItem}>Release Calendar</li>
                <li className={styles.Footer__listItem}>News</li>
              </ul>
            </div>
            <div>
              <h2 className={styles.Footer__aboutTitle}>About</h2>
              <ul className={styles.Footer__informationList}>
                <li className={styles.Footer__listItem}>
                  <Link to={'/inDevelopment'}>Privacy Policy</Link>
                </li>
                <li className={styles.Footer__listItem}>
                  <Link to={'/inDevelopment'}>Disclaimer</Link>
                </li>
                <li className={styles.Footer__listItem}>
                  <Link to={'/inDevelopment'}>Help</Link>
                </li>
                <li className={styles.Footer__listItem}>
                  <Link to={'/inDevelopment'}>FAQ</Link>
                </li>
              </ul>
            </div>
            <div className={styles.Footer__social}>
              <h2>Account</h2>
              <ul className={styles.Footer__socialList}>
                <li className={styles.Footer__listItem}>
                  <a href="/">Create Account</a>
                </li>
                <li className={styles.Footer__listItem}>
                  <a href="/">Login</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
