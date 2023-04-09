import React from 'react';
import styles from './Recommended.module.scss';
import Slider from '../Slider/Slider';
import { RecommendedProps } from './interface';

const Recommended = ({ currentAnime }: RecommendedProps) => {
  const LENGHT = currentAnime.recommendations;

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
