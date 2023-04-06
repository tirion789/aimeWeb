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
import Loader from '../Loader/Loader';
import Select from '../Select/Select';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';

const Player = () => {
  const FIRST_SERIES = '1';
  const dispatch = useAppDispatch();
  const { id } = useParams();
  const animeVideo = useAppSelector(videoSelector);
  const currentAnime = useAppSelector(currentItemSelector);

  const [currentEpisode, setCurrentEpisode] = useState<string | undefined>(
    currentAnime?.episodes[0]?.id,
  );
  const statusVideo = useAppSelector(statusPlayerSelector);
  const animeItem = useAppSelector((state) =>
    getCurrentAnimeSelector(state, currentAnime?.title.romaji),
  );
  const [series, setSeries] = useState<string>(animeItem?.currentAnimeSeries || FIRST_SERIES);

  const handleOnSeriesClick = (value: string) => {
    setSeries(value);
    if (currentAnime) {
      const options = {
        title: currentAnime.title.romaji,
        series: value,
      };
      dispatch(setCurrentSeries(options));
    }
  };

  const handleSwapNextSeries = () => {
    setCurrentEpisode(currentAnime?.episodes[Number(series)]?.id);
  };

  const handleSwapPrevSeries = () => {
    setCurrentEpisode(currentAnime?.episodes[Number(series) - 2]?.id);
  };
  const handleActiveSeriesClick = (episodeNumber: number, episodeId: string) => {
    handleOnSeriesClick(String(episodeNumber));
    setCurrentEpisode(episodeId);
  };

  useEffect(() => {
    if (id) {
      dispatch(fetchVideoAnime({ currentEpisode }));
    }
  }, [id, dispatch, currentEpisode]);

  if (statusVideo === 'loading') {
    return <Loader />;
  }

  return (
    <div className={styles.Player}>
      <div className={styles.Player__background}>
        <div className={styles.Player__overlay}>
          <div className={styles.Player__video}>
            <Select
              handleSwapNextSeries={handleSwapNextSeries}
              handleSwapPrevSeries={handleSwapPrevSeries}
              series={series}
              setSeries={setSeries}
              handleActiveSeriesClick={handleActiveSeriesClick}
            />
            <div className={styles.Player__iframeContainer}>
              <iframe
                className={styles.Player__iframe}
                src={animeVideo?.headers.Referer}
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
