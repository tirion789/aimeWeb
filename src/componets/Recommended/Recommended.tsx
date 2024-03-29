import React from 'react';
import styles from './Recommended.module.scss';
import Slider from '../Slider/Slider';
import { RecommendedProps } from './interface';

const Recommended = ({ currentAnime }: RecommendedProps) => {
  return (
    <div className={styles.Recommended}>
      <div className={styles.Overlay}>
        <h1 className={styles.RecommendationsTitle}>Recommended</h1>
        <Slider items={currentAnime.recommendations} />
      </div>
    </div>
  );
};

export default Recommended;
