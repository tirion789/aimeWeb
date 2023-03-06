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
  const state = localStorage.getItem('currentSeries' + currentAnime?.animeTitle);
  const [currentSeries, setCurrentSeries] = useState(state);

  console.log(state);

  const handleOnSeriesClick = (value: string) => {
    setCurrentSeries(value);
    localStorage.setItem('currentSeries' + currentAnime?.animeTitle, JSON.stringify(value));
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
      setCurrentSeries(JSON.parse(state || 'false'));
      dispatch(fetchVideoAnime({ animeId, currentSeries }));
    }
  }, [animeId, dispatch, currentSeries, currentAnime?.animeTitle, state]);
  return (
    <div className={styles.Player}>
      <div className={styles.Player__background}>
        <div className={styles.Player__overlay}>
          <div className={styles.Player__video}>
            <p>Series: {currentSeries ? currentSeries : '1'}</p>
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
