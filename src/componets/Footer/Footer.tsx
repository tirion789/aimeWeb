import React from 'react';
import styles from './Footer.module.scss';
import { ReactComponent as Github } from '../../assets/images/icons/github.svg';
import { ReactComponent as Telegram } from '../../assets/images/icons/telegram.svg';
import { ReactComponent as Gmail } from '../../assets/images/icons/gmail.svg';

const Footer = () => {
  const icons = [
    <Github width={30} height={30} />,
    <Telegram width={30} height={30} />,
    <Gmail width={30} height={30} />,
  ];
  return (
    <ul className={styles.Container}>
      {icons.map((icon, index) => (
        <li key={index}>{icon}</li>
      ))}
    </ul>
  );
};

export default Footer;
