import React, { useEffect, useState } from 'react';
import { useGetAnimeViedoQuery } from '../../redux/api/query';
import styles from './Player.module.scss';
import { setCurrentSeries } from '../../redux/profileSlice/profileSlice';
import Select from '../Select/Select';
import { useAppDispatch } from '../../redux/hooks';
import { PlayerProps } from './interface';
import Loader from '../Loader/Loader';

const Player = ({ currentAnime, isSuccess }: PlayerProps) => {
  const FIRST_SERIES = 1;
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

  const [series, setSeries] = useState<number>(FIRST_SERIES);

  const handleOnSeriesClick = (value: number) => {
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
    handleOnSeriesClick(episodeNumber);
    setCurrentEpisode(episodeId);
  };

  return (
    <div className={styles.Player}>
      <div className={styles.Background}>
        <div className={styles.Overlay}>
          <div className={styles.Video}>
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
              <>
                <div className={styles.IframeContainer}>
                  <iframe
                    className={styles.Iframe}
                    src={animeVideo?.headers.Referer}
                    frameBorder="0"
                    scrolling="no"
                    allowFullScreen></iframe>
                </div>
                <div className={styles.SeriesDescriptionContainer}>
                  <p className={styles.SeriesDescriptionHeader}>Series description</p>
                  <p className={styles.SeriesDescriptionText}>
                    Description: {currentAnime.episodes[series - 1].description}
                  </p>
                  <p className={styles.SeriesDescriptionText}>
                    Title: {currentAnime.episodes[series - 1].title}
                  </p>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Player;
