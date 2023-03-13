import React, { ChangeEvent, useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { fetchVideoAnime } from '../../redux/animeSlice/asyncAction';
import { useAppDispatch, useAppSelector } from '../../redux/store';
import styles from './Player.module.scss';
import { currentItem, video } from '../../redux/animeSlice/selectors';
import { setCurrentSeries } from '../../redux/profileSlice/profileSlice';
import { getCurrentAnime } from '../../redux/profileSlice/selectors';
import { debounce } from 'lodash';

const Player = () => {
  const dispatch = useAppDispatch();
  const { animeId } = useParams();
  const animeVideo = useSelector(video);
  const currentAnime = useSelector(currentItem);
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

  const onSearchSeries = debounce((value) => {
    handleOnSeriesClick(value);
  }, 1500);

  const onActiveSeriesClick = (event: ChangeEvent<HTMLSelectElement>) => {
    const target = event.target as HTMLSelectElement;
    const value = target.value;
    handleOnSeriesClick(value);
  };

  const onActiveSeriesSearch = (event: ChangeEvent<HTMLInputElement>) => {
    const target = event.target as HTMLInputElement;
    const value = target.value;
    onSearchSeries(value);
  };

  let arraySeries: number[] = [];

  if (currentAnime) {
    for (let i = 1; i <= currentAnime.episodesList.length; i++) {
      arraySeries.push(i);
    }
  }

  console.log(series);

  useEffect(() => {
    if (animeId) {
      dispatch(fetchVideoAnime({ animeId, series }));
    }
  }, [animeId, dispatch, currentAnime?.animeTitle, series]);

  return (
    <div className={styles.Player}>
      <div className={styles.Player__background}>
        <div className={styles.Player__overlay}>
          <div className={styles.Player__video}>
            <div className={styles.Player__buttonsContainer}>
              <select
                className={styles.Player__selector}
                onChange={onActiveSeriesClick}
                value={series}>
                {arraySeries.map((button) => (
                  <option className={styles.Player__selectorOption} value={button}>
                    {button}
                  </option>
                ))}
              </select>
              <label>
                <input
                  placeholder="Search"
                  className={styles.Player__searchSeries}
                  onChange={onActiveSeriesSearch}
                  type="number"
                />
              </label>
            </div>
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

{
  /* <li>
<button className={styles.Player__buttons} onClick={onActiveSeries}>
  {button}
</button>
</li> */
}

export default Player;
