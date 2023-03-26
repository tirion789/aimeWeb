import React from 'react';
import { IProfileList } from './interface';
import styles from './ProfileList.module.scss';

const ProfileList = ({ title, items, handleDeleteButtonClick }: IProfileList) => {
  return (
    <div className={styles.Profile__favorites}>
      <h1 className={styles.Profile__favoritesTitle}>
        {title}: {items.length}
      </h1>
      <ul className={styles.Profile__favoriteList}>
        {items.map((obj) => (
          <li key={obj.animeTitle} className={styles.Profile__favoriteListItem}>
            <p className={styles.Profile__favoriteListItemTitle}>{obj.animeTitle}</p>
            <div className={styles.Profile__favoritelistItemEpisodes}>
              <span>{obj.currentAnimeSeries ? obj.currentAnimeSeries : '0'}</span>/{' '}
              <span>{obj.episodesList.length}</span>
            </div>
            <button
              className={styles.Profile__favoriteListItemButtonDeleted}
              onClick={() => handleDeleteButtonClick(obj.animeTitle)}>
              Удалить
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProfileList;
