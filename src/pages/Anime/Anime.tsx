import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Discription from '../../componets/Discription/Discription';
import Footer from '../../componets/Footer/Footer';
import Header from '../../componets/Header/Header';
import Player from '../../componets/Player/Player';
import { fetchAnime } from '../../redux/animeSlice/asyncAction';
import { currentItemSelector } from '../../redux/animeSlice/selectors';
import styles from './Anime.module.scss';
import AnimeControls from '../../componets/AnimeControls/AnimeControls';
import { useAuth } from '../../hooks/useAuth';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';

const Anime = () => {
  const { animeId } = useParams();
  const dispatch = useAppDispatch();
  const currentAnime = useAppSelector(currentItemSelector);
  const { isAuth } = useAuth();

  useEffect(() => {
    if (animeId) {
      dispatch(fetchAnime(animeId));
    }
  }, [animeId, dispatch]);

  if (!currentAnime) {
    return <p>Loading...</p>;
  }

  return (
    <div className={styles.wrapper}>
      <Header />
      <main>
        <div className={styles.Anime}>
          <div className={styles.Anime__background}>
            <div className={styles.Anime__overlay}>
              <div className={styles.Anime__container}>
                <div className={styles.Anime__imgContaier}>
                  <img className={styles.Anime__image} src={currentAnime?.animeImg} alt="anime" />
                  <div className={styles.Anime__btnContainer}>
                    {isAuth ? (
                      <AnimeControls />
                    ) : (
                      <p>in order to add anime to the lists - log in</p>
                    )}
                  </div>
                </div>
                <Discription />
              </div>
            </div>
          </div>
        </div>
        <Player />
      </main>
      <footer className={styles.FooterBackground}>
        <div className={styles.FooterOverlay}>
          <Footer />
        </div>
      </footer>
    </div>
  );
};

export default Anime;
