import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Footer.module.scss';

const Footer = () => {
  const navigationArray = ['Browse Popular', 'Browse Manga', 'Release Calendar', 'News'];
  const aboutArray = ['Privacy Policy', 'Disclaimer', ' Help', 'FAQ'];
  const accountArray = ['Create Account', 'Login'];
  // мапы
  // оверлей и бекграунд в один класс
  return (
    <div className={styles.Footer__container}>
      <div className={styles.Footer__navigation}>
        <h2 className={styles.Footer__navigationTitle}>Navigation</h2>
        <ul className={styles.Footer__navigationList}>
          {navigationArray.map((title, index) => (
            <li key={index} className={styles.Footer__listItemNavigation}>
              <Link className={styles.Footer__listNavigationItem} to={'/'}>
                {title}
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <div>
        <h2 className={styles.Footer__aboutTitle}>About</h2>
        <ul className={styles.Footer__informationList}>
          {aboutArray.map((title, index) => (
            <li key={index} className={styles.Footer__listItem}>
              <Link className={styles.Footer__listItemLink} to={'/inDevelopment'}>
                {title}
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <div className={styles.Footer__social}>
        <h2 className={styles.Footer__accountTitle}>Account</h2>
        <ul className={styles.Footer__socialList}>
          {accountArray.map((title, index) => (
            <li key={index} className={styles.Footer__listItem}>
              <a className={styles.Footer__listItemAccountLink} href="/">
                {title}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Footer;
