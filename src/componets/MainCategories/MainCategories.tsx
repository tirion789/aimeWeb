import React from 'react';
import { MainCategoriesProps } from './interface';
import styles from './MainCategories.module.scss';
import Slider from '../Slider/Slider';

const MainCategories = ({ items, isError, name }: MainCategoriesProps) => {
  return (
    <div className={styles.MainCategories}>
      <div className={styles.Container}>
        <div className={styles.HeaderContainer}>
          <p className={styles.Title}>{name}</p>
        </div>
        {isError ? (
          <p className={styles.Error}>Server error</p>
        ) : (
          <>
            <Slider items={items} />
          </>
        )}
      </div>
    </div>
  );
};

export default MainCategories;
