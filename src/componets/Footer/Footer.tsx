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
                <li className={styles.Footer__listItemNavigation}>
                  <Link className={styles.Footer__listNavigationItem} to={'/'}>
                    Browse Popular
                  </Link>
                </li>
                <li className={styles.Footer__listItemNavigation}>
                  <Link className={styles.Footer__listNavigationItem} to={'/'}>
                    Browse Manga
                  </Link>
                </li>
                <li className={styles.Footer__listItemNavigation}>
                  <Link className={styles.Footer__listNavigationItem} to={'/'}>
                    Release Calendar
                  </Link>
                </li>
                <li className={styles.Footer__listItemNavigation}>
                  <Link className={styles.Footer__listNavigationItem} to={'/'}>
                    News
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h2 className={styles.Footer__aboutTitle}>About</h2>
              <ul className={styles.Footer__informationList}>
                <li className={styles.Footer__listItem}>
                  <Link className={styles.Footer__listItemLink} to={'/inDevelopment'}>
                    Privacy Policy
                  </Link>
                </li>
                <li className={styles.Footer__listItem}>
                  <Link className={styles.Footer__listItemLink} to={'/inDevelopment'}>
                    Disclaimer
                  </Link>
                </li>
                <li className={styles.Footer__listItem}>
                  <Link className={styles.Footer__listItemLink} to={'/inDevelopment'}>
                    Help
                  </Link>
                </li>
                <li className={styles.Footer__listItem}>
                  <Link className={styles.Footer__listItemLink} to={'/inDevelopment'}>
                    FAQ
                  </Link>
                </li>
              </ul>
            </div>
            <div className={styles.Footer__social}>
              <h2 className={styles.Footer__accountTitle}>Account</h2>
              <ul className={styles.Footer__socialList}>
                <li className={styles.Footer__listItem}>
                  <a className={styles.Footer__listItemAccountLink} href="/">
                    Create Account
                  </a>
                </li>
                <li className={styles.Footer__listItem}>
                  <a className={styles.Footer__listItemAccountLink} href="/">
                    Login
                  </a>
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
