import React from 'react';
import styles from './Loader.module.scss';
import { ReactComponent as Sharingan } from '../../assets/images/icons/sharingan.svg';

const Loader = () => {
  return (
    <div className={styles.loader}>
      <Sharingan />
    </div>
  );
};

export default Loader;
