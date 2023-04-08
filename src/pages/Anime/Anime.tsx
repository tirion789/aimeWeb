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
import Recommended from '../../componets/Recommended/Recommended';
import Characters from '../../componets/Charatcer/Characters';
import { setIsOpenPopupLogin } from '../../redux/filterSlice/filterSlice';
import Relations from '../../componets/Relations/Relations';

const Anime = () => {
  const { id } = useParams();
  const dispatch = useAppDispatch();
  const currentAnime = useAppSelector(currentItemSelector);
  const { isAuth } = useAuth();

  useEffect(() => {
    if (id) {
      dispatch(fetchAnime(id));
    }
  }, [id, dispatch]);

  if (!currentAnime) {
    return <p>Loading...</p>;
  }

  const handleClickLogin = () => {
    dispatch(setIsOpenPopupLogin(true));
  };

  return (
    <>
      <Header />
      <main>
        <div className={styles.Anime__background}>
          <div className={styles.Anime__overlay}>
            <div className={styles.Anime__container}>
              <div className={styles.Anime__imgContaier}>
                <img className={styles.Anime__image} src={currentAnime?.image} alt="anime" />
                <div className={styles.Anime__btnContainer}>
                  {isAuth ? (
                    <AnimeControls />
                  ) : (
                    <button onClick={handleClickLogin} className={styles.Anime__loginButton}>
                      Login
                    </button>
                  )}
                </div>
              </div>
              <Discription />
            </div>
          </div>
        </div>
        {currentAnime.type === 'MANGA' ? '' : <Player />}
        <Characters />
        {currentAnime.recommendations.length ? <Recommended /> : null}
        {currentAnime.relations.length ? <Relations /> : null}
      </main>
      <footer className={styles.FooterBackground}>
        <div className={styles.FooterOverlay}>
          <Footer />
        </div>
      </footer>
    </>
  );
};

export default Anime;
