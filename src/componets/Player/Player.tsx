import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { fetchVideoAnime } from '../../redux/animeSlice/asyncAction';
import { useAppDispatch } from '../../redux/store';
import styles from './Player.module.scss';
import { MouseEvent } from 'react';
import { currentItem, video } from '../../redux/animeSlice/selectors';

const Player = () => {
  const dispatch = useAppDispatch();
  const { animeId } = useParams();
  const animeVideo = useSelector(video);
  const currentAnime = useSelector(currentItem);
  const [series, setSeries] = useState('1');

  const handleOnSeriesClick = (value: string) => {
    setSeries(value);
  };

  const onActiveSeries = (event: MouseEvent<HTMLButtonElement>) => {
    const value = event.currentTarget.innerHTML;
    handleOnSeriesClick(value);
  };

  let arraySeries = [];

  if (currentAnime) {
    for (let i = 1; i <= currentAnime.episodesList.length; i++) {
      arraySeries.push(i);
    }
  }

  useEffect(() => {
    if (animeId) {
      dispatch(fetchVideoAnime({ animeId, series }));
    }
  }, [animeId, series, dispatch]);
  return (
    <div className={styles.Player}>
      <div className={styles.Player__background}>
        <div className={styles.Player__overlay}>
          <div className={styles.Player__video}>
            <iframe
              src={animeVideo?.Referer}
              height={750}
              frameBorder="0"
              scrolling="no"
              allowFullScreen
              width={1000}></iframe>
          </div>
          <ul className={styles.Player__buttonsContainer}>
            {arraySeries.map((button) => (
              <li>
                <button className={styles.Player__buttons} onClick={onActiveSeries}>
                  {button}
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Player;
