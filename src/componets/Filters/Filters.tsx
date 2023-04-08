import React, { useState } from 'react';
import styles from './Filters.module.scss';
import '../../assets/scss/component.scss';
import { FilterProps } from './interface';
import { getNormalizeTitle } from '../../common/util';
import { useAppSelector } from '../../redux/hooks';
import { typeSelector } from '../../redux/filterSlice/selectors';

const Filter = ({ items, title, handleClickCurrentInput, header, disabled }: FilterProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const type = useAppSelector(typeSelector);

  const handleClickOpenButton = () => {
    setIsOpen((prev) => !prev);
  };

  const filterItems = items.filter((item) => item !== title);

  return (
    <section className={styles.Filter}>
      <div className={styles.Filter__conteiner}>
        <h1>{header} By:</h1>
        <button
          disabled={type === 'MANGA' && disabled}
          className={styles.Filter__button}
          onClick={handleClickOpenButton}>
          {getNormalizeTitle(title)}
        </button>
      </div>
      {isOpen && (
        <ul
          style={{ left: header === 'Filter' ? '148px' : '148px' }}
          className={`${styles.Filter__list} scrollbar`}>
          {filterItems.map((value) => (
            <li className={styles.Filter__item} key={value}>
              <button onClick={() => handleClickCurrentInput(value)}>
                {getNormalizeTitle(value)}
              </button>
            </li>
          ))}
        </ul>
      )}
    </section>
  );
};

export default Filter;
