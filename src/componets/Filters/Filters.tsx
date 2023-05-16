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
      <div className={styles.Conteiner}>
        <h1 style={{ width: '123px' }}>{header} By:</h1>
        <button
          disabled={type === 'MANGA' && disabled}
          className={styles.Button}
          onClick={handleClickOpenButton}>
          {getNormalizeTitle(title)}
        </button>
      </div>
      {
        <ul className={`${isOpen ? styles.List : styles.HiddeList} scrollbar`}>
          {filterItems.map((value) => (
            <li className={styles.Item} key={value}>
              <button onClick={() => handleClickCurrentInput(value)}>
                {getNormalizeTitle(value)}
              </button>
            </li>
          ))}
        </ul>
      }
    </section>
  );
};

export default Filter;
