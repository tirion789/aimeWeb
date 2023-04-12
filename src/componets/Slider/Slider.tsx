import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './Slider.module.scss';
import { ReactComponent as Star } from '../../assets/images/icons/star.svg';
import { ReactComponent as Arrow } from '../../assets/images/icons/paginationArrow.svg';
import { SliderProps } from './interface';

const Slider = ({ items }: SliderProps) => {
  const WIDTH_BLOCK_OFFSET = 295;

  const [activeIndex, setActiveIndex] = useState(0);

  const handleClickNextAnime = () => {
    if (items && activeIndex <= items.length - 6) {
      setActiveIndex((prev) => prev + 1);
    }
  };

  const handleClickPrevAnime = () => {
    if (activeIndex !== 0) {
      setActiveIndex((prev) => prev - 1);
    }
  };

  return (
    <div className={styles.Slider}>
      <button
        className={styles.SwapSlideButton}
        disabled={activeIndex === 0}
        onClick={handleClickPrevAnime}>
        <Arrow transform="rotate(180)" />
      </button>
      <ul className={styles.List}>
        {items?.map(({ episodes, id, image, rating, title, totalEpisodes, type }) => (
          <li
            key={id}
            style={{ transform: `translateX(-${activeIndex * WIDTH_BLOCK_OFFSET}px)` }}
            className={styles.Item}>
            <Link to={`/anime/${id}`}>
              <img className={styles.Image} src={image} alt="" />
              <div className={styles.TitleListContainer}>
                <h2 className={styles.TitleListItemNames}>{title.romaji}</h2>
                <div style={{ display: 'flex' }}>
                  <p className={styles.Episodes}>
                    {type === 'MANGA' ? 'Chapters: ' : 'Episodes: '}
                    {totalEpisodes || episodes ? totalEpisodes || episodes : '?'}
                  </p>
                  <div className={styles.Container}>
                    <Star width={19} height={19} />
                    <span className={styles.Rating}>
                      {String(rating ? rating : '')
                        .split('')
                        .join('.')}
                    </span>
                  </div>
                </div>
              </div>
            </Link>
          </li>
        ))}
      </ul>
      <button
        className={styles.SwapSlideButton}
        disabled={items ? activeIndex === items.length - 6 : undefined}
        onClick={handleClickNextAnime}>
        <Arrow />
      </button>
    </div>
  );
};

export default Slider;
