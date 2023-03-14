import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { fetchVideoAnime } from '../../redux/animeSlice/asyncAction';
import { useAppDispatch, useAppSelector } from '../../redux/store';
import styles from './Player.module.scss';
import { currentItem, statusPlayer, video } from '../../redux/animeSlice/selectors';
import { setCurrentSeries } from '../../redux/profileSlice/profileSlice';
import { getCurrentAnime } from '../../redux/profileSlice/selectors';
import { MouseEvent } from 'react';
import Loader from '../Loader/Loader';
import Select from '../Select/Select';

const Player = () => {
  const dispatch = useAppDispatch();
  const { animeId } = useParams();
  const animeVideo = useSelector(video);
  const currentAnime = useSelector(currentItem);
  const statusVideo = useSelector(statusPlayer);
  const animeItem = useAppSelector((state) => getCurrentAnime(state, currentAnime?.animeTitle));
  const [series, setSeries] = useState<string>(animeItem?.currentAnimeSeries || '1');

  const handleOnSeriesClick = (value: string) => {
    setSeries(value);
    if (currentAnime) {
      const options = {
        title: currentAnime.animeTitle,
        series: value,
      };
      dispatch(setCurrentSeries(options));
    }
  };

  const onActiveSeriesClick = (event: MouseEvent<HTMLButtonElement>) => {
    const target = event.target as HTMLButtonElement;
    const value = target.innerHTML;
    handleOnSeriesClick(value);
  };

  let arraySeries: number[] = [];

  if (currentAnime) {
    for (let i = 1; i <= currentAnime.episodesList.length; i++) {
      arraySeries.push(i);
    }
  }

  useEffect(() => {
    if (animeId) {
      dispatch(fetchVideoAnime({ animeId, series }));
    }
  }, [animeId, dispatch, currentAnime?.animeTitle, series]);

  if (statusVideo === 'loading') {
    return <Loader />;
  }

  return (
    <div className={styles.Player}>
      <div className={styles.Player__background}>
        <div className={styles.Player__overlay}>
          <div className={styles.Player__video}>
            <Select
              arraySeries={arraySeries}
              series={series}
              onActiveSeriesClick={onActiveSeriesClick}
            />
            <div className={styles.Player__iframeContainer}>
              <iframe
                className={styles.Player__iframe}
                src={animeVideo?.Referer}
                frameBorder="0"
                scrolling="no"
                allowFullScreen></iframe>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Player;
