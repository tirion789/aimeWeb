import React from 'react';
import styles from './Recommended.module.scss';
import { useAppSelector } from '../../redux/hooks';
import { currentItemSelector } from '../../redux/animeSlice/selectors';
import Slider from '../Slider/Slider';

const Recommended = () => {
  const currentAnime = useAppSelector(currentItemSelector);

  const LENGHT = currentAnime?.recommendations;

  return (
    <div className={styles.Recommended}>
      <div className={styles.Recommended__overlay}>
        <h1 className={styles.Recommended__recommendationsTitle}>Recommended</h1>
        <Slider items={LENGHT} />
      </div>
    </div>
  );
};

export default Recommended;
