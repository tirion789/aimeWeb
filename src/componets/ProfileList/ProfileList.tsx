import React from 'react';
import { ProfileListProps } from './interface';
import styles from './ProfileList.module.scss';

const ProfileList = ({ title, items, handleDeleteButtonClick }: ProfileListProps) => {
  return (
    <div className={styles.Profile__favorites}>
      <h1 className={styles.Profile__favoritesTitle}>
        {title}: {items.length}
      </h1>
      <ul className={styles.Profile__favoriteList}>
        {items.map(({ animeTitle, currentAnimeSeries, episodesList }) => (
          <li key={animeTitle} className={styles.Profile__favoriteListItem}>
            <p className={styles.Profile__favoriteListItemTitle}>{animeTitle}</p>
            <div className={styles.Profile__favoritelistItemEpisodes}>
              <span>{currentAnimeSeries ? currentAnimeSeries : '0'}</span>/{' '}
              <span>{episodesList.length}</span>
            </div>
            <button
              className={styles.Profile__favoriteListItemButtonDeleted}
              onClick={() => handleDeleteButtonClick(animeTitle)}>
              Удалить
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProfileList;
