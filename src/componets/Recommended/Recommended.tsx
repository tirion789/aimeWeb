import React, { useState } from 'react';
import styles from './Recommended.module.scss';
import { useAppSelector } from '../../redux/hooks';
import { currentItemSelector } from '../../redux/animeSlice/selectors';
import { Link } from 'react-router-dom';
import { ReactComponent as Star } from '../../assets/images/icons/star.svg';
import { ReactComponent as Arrow } from '../../assets/images/icons/paginationArrow.svg';

const Recommended = () => {
  const currentAnime = useAppSelector(currentItemSelector);
  const [activeIndex, setActiveIndex] = useState(0);
  const LENGHT = currentAnime?.recommendations.length;
  const WIDTH_BLOCK_OFFSET = 280;

  const handleClickNextAnime = () => {
    // @ts-ignore
    if (activeIndex <= LENGHT - 6) {
      setActiveIndex((prev) => prev + 1);
    }
  };

  const handleClickPrevAnime = () => {
    if (activeIndex !== 0) {
      setActiveIndex((prev) => prev - 1);
    }
  };

  return (
    <div className={styles.Recommended}>
      <div className={styles.Recommended__overlay}>
        <h1 className={styles.Recommended__recommendationsTitle}>Recommended</h1>
        <div className={styles.Recommended__slider}>
          <button
            className={styles.Recommended__swapSlideButton}
            disabled={activeIndex === 0}
            onClick={handleClickPrevAnime}>
            <Arrow transform="rotate(180)" />
          </button>
          <ul className={styles.Recommended__list}>
            {currentAnime?.recommendations.map(({ episodes, id, image, rating, title }) => (
              <li
                style={{ transform: `translateX(-${activeIndex * WIDTH_BLOCK_OFFSET}px)` }}
                className={styles.Recommended__item}>
                <Link to={`/anime/${id}`}>
                  <img className={styles.Recommended__image} src={image} alt="" />
                  <div className={styles.Recommended__titleListContainer}>
                    <h2 className={styles.Recommended__titleListItemNames}>{title.romaji}</h2>
                    <div style={{ display: 'flex' }}>
                      <p className={styles.Recommended__episodes}>Episodes: {episodes}</p>
                      <div style={{ marginLeft: 'auto' }}>
                        <Star width={19} height={19} />
                        <span style={{ marginLeft: '10px' }}>
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
            className={styles.Recommended__swapSlideButton}
            // @ts-ignore
            disabled={activeIndex === LENGHT - 6}
            onClick={handleClickNextAnime}>
            <Arrow />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Recommended;
