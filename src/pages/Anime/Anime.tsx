import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import Discription from '../../componets/Discription/Discription';
import Footer from '../../componets/Footer/Footer';
import Header from '../../componets/Header/Header';
import Player from '../../componets/Player/Player';
import { fetchAnime } from '../../redux/animeSlice/asyncAction';
import { RootState, useAppDispatch } from '../../redux/store';
import styles from './Anime.module.scss';

const Anime = () => {
  const { code } = useParams();
  const dispatch = useAppDispatch();
  const anime = useSelector((state: RootState) => state.anime.currentItem);

  useEffect(() => {
    if (code) {
      dispatch(fetchAnime(code));
    }
  }, [code, dispatch]);

  return (
    <div className={styles.wrapper}>
      <Header />
      <main>
        <div className={styles.Anime}>
          <div className={styles.Anime__background}>
            <div className={styles.Anime__overlay}>
              <div className={styles.Anime__container}>
                <div className={styles.Anime__imgContaier}>
                  <img
                    width={250}
                    height={350}
                    src={`https://cdn.weekstorm.us${anime?.posters.original.url}`}
                    alt="anime"
                  />
                  <button className={styles.Anime__addToList}>Add to list</button>
                </div>
                <Discription />
              </div>
            </div>
          </div>
        </div>
        <Player />
      </main>
      <Footer />
    </div>
  );
};

export default Anime;
