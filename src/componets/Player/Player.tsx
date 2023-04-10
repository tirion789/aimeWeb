import React, { useEffect, useState } from 'react';
import { useGetAnimeViedoQuery } from '../../redux/api/query';
import styles from './Player.module.scss';
import { setCurrentSeries } from '../../redux/profileSlice/profileSlice';
import { getCurrentAnimeSelector } from '../../redux/profileSlice/selectors';
import Select from '../Select/Select';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { PlayerProps } from './interface';
import Loader from '../Loader/Loader';

const Player = ({ currentAnime, isSuccess }: PlayerProps) => {
  const FIRST_SERIES = '1';
  const dispatch = useAppDispatch();
  const [currentEpisode, setCurrentEpisode] = useState<string | null>(null);

  useEffect(() => {
    if (isSuccess) {
      setCurrentEpisode(currentAnime.episodes[0].id);
    }
  }, [isSuccess]);

  const { data: animeVideo, isFetching } = useGetAnimeViedoQuery(currentEpisode as string, {
    skip: !isSuccess,
  });

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
    if (currentAnime?.episodes) {
      setCurrentEpisode(currentAnime.episodes[Number(series)]?.id);
    }
  };

  const handleSwapPrevSeries = () => {
    if (currentAnime?.episodes) {
      setCurrentEpisode(currentAnime.episodes[Number(series) - 2]?.id);
    }
  };
  const handleActiveSeriesClick = (episodeNumber: number, episodeId: string) => {
    handleOnSeriesClick(String(episodeNumber));
    setCurrentEpisode(episodeId);
  };

  return (
    <div className={styles.Player}>
      <div className={styles.Player__background}>
        <div className={styles.Player__overlay}>
          <div className={styles.Player__video}>
            {currentAnime.episodes.length > 1 && (
              <Select
                handleSwapNextSeries={handleSwapNextSeries}
                handleSwapPrevSeries={handleSwapPrevSeries}
                series={series}
                setSeries={setSeries}
                handleActiveSeriesClick={handleActiveSeriesClick}
                currentAnime={currentAnime}
              />
            )}
            {isFetching ? (
              <Loader />
            ) : (
              <div className={styles.Player__iframeContainer}>
                <iframe
                  className={styles.Player__iframe}
                  src={animeVideo?.headers.Referer}
                  frameBorder="0"
                  scrolling="no"
                  allowFullScreen></iframe>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Player;
