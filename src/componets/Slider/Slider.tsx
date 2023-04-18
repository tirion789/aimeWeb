import React, { useState } from 'react';
import styles from './Slider.module.scss';
import { ReactComponent as Arrow } from '../../assets/images/icons/paginationArrow.svg';
import { SliderProps } from './interface';
import SliderListItem from './SliderListItem/SliderListItem';

const Slider = ({ items }: SliderProps) => {
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
          <SliderListItem
            activeIndex={activeIndex}
            episodes={episodes}
            id={id}
            title={title}
            image={image}
            rating={rating}
            totalEpisodes={totalEpisodes}
            type={type}
          />
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
