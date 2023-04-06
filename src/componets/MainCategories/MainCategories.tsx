import React from 'react';
import Loader from '../Loader/Loader';
import { MainCategoriesProps } from './interface';
import styles from './MainCategories.module.scss';
import Slider from '../Slider/Slider';

const MainCategories = ({ items, isError, isLoading, name }: MainCategoriesProps) => {
  if (isLoading) {
    return <Loader />;
  }

  return (
    <div className={styles.MainCategories}>
      <div className={styles.MainCategories__container}>
        <div className={styles.MainCategories__headerContainer}>
          <h2 className={styles.MainCategories__title}>{name}</h2>
        </div>
        {isError ? (
          <p className={styles.MainCategories__error}>Server error</p>
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
