import React from 'react';
import { Link } from 'react-router-dom';
import { setLetter } from '../../../redux/filterSlice/filterSlice';
import styles from './AlphabeticalSearchListItem.module.scss';
import { AlphabeticalSearchListItemProps } from './interface';
import { useAppDispatch } from '../../../redux/hooks';

const AlphabeticalSearchListItem = ({ latter, key }: AlphabeticalSearchListItemProps) => {
  const dispatch = useAppDispatch();

  const handleClickLetter = () => {
    dispatch(setLetter(latter));
  };

  return (
    <li key={key} className={styles.ListItem}>
      <Link className={styles.ListItemLink} onMouseDown={handleClickLetter} to={`/inDevelopment`}>
        {latter}
      </Link>
    </li>
  );
};

export default AlphabeticalSearchListItem;
