import React from 'react';
import { ProfileListProps } from './interface';
import styles from './ProfileList.module.scss';
import { Link } from 'react-router-dom';

const ProfileList = ({ title, items, handleDeleteButtonClick }: ProfileListProps) => {
  return (
    <>
      <h1 className={styles.Title}>
        {title} : {items.length}
      </h1>
      <ul className={styles.List}>
        {items.map(({ title, currentAnimeSeries, totalEpisodes, id }) => (
          <li key={title.romaji} className={styles.ListItem}>
            <Link to={`/anime/${id}`}>
              <p className={styles.ListItemTitle}>{title.romaji}</p>
            </Link>
            <div className={styles.ListItemEpisodes}>
              <span>{currentAnimeSeries ? currentAnimeSeries : '0'}</span>/
              <span>{totalEpisodes}</span>
            </div>
            <button
              className={styles.ListItemButtonDeleted}
              onClick={() => handleDeleteButtonClick(title.romaji)}>
              Удалить
            </button>
          </li>
        ))}
      </ul>
    </>
  );
};

export default ProfileList;
