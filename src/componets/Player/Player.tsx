import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchVideoAnime } from '../../redux/animeSlice/asyncAction';
import styles from './Player.module.scss';
import {
  currentItemSelector,
  statusPlayerSelector,
  videoSelector,
} from '../../redux/animeSlice/selectors';
import { setCurrentSeries } from '../../redux/profileSlice/profileSlice';
import { getCurrentAnimeSelector } from '../../redux/profileSlice/selectors';
import { MouseEvent } from 'react';
import Loader from '../Loader/Loader';
import Select from '../Select/Select';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';

const Player = () => {
  const dispatch = useAppDispatch();
  const { animeId } = useParams();
  const animeVideo = useAppSelector(videoSelector);
  const currentAnime = useAppSelector(currentItemSelector);
  const statusVideo = useAppSelector(statusPlayerSelector);
  const animeItem = useAppSelector((state) =>
    getCurrentAnimeSelector(state, currentAnime?.animeTitle),
  );
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

  const handleActiveSeriesClick = (event: MouseEvent<HTMLButtonElement>) => {
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
              setSeries={setSeries}
              handleActiveSeriesClick={handleActiveSeriesClick}
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
