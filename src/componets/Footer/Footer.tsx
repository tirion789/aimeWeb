import React from 'react';
import styles from './Footer.module.scss';

const Footer = () => {
  return (
    <div className={styles.Footer}>
      <div className={styles.Footer__navigationList}>
        <h2>Navigation</h2>
        <ul>
          <li>Browse Popular</li>
          <li>Browse Manga</li>
          <li>Release Calendar</li>
          <li>News</li>
        </ul>
      </div>
      <ul className={styles.Footer__informationList}>
        <li>
          <a href="/">About</a>
        </li>
        <li>
          <a href="/">Privacy Policy</a>
        </li>
        <li>
          <a href="/">Disclaimer</a>
        </li>
        <li>
          <a href="/">Help</a>
        </li>
        <li>
          <a href="/">FAQ</a>
        </li>
      </ul>
      <div className={styles.Footer__socialList}>
        <h2>Account</h2>
        <ul>
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
  );
};

export default Footer;
