import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../redux/store';
import styles from './Player.module.scss';

const Player = () => {
  const anime = useSelector((state: RootState) => state.anime.currentItem);
  return (
    <div className={styles.Player}>
      <div className={styles.Player__background}>
        <div className={styles.Player__overlay}>
          <div className={styles.Player__video}>
            <iframe
              src={anime?.player.alternative_player}
              height={750}
              frameBorder="0"
              scrolling="no"
              allowFullScreen
              width={1000}></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Player;
