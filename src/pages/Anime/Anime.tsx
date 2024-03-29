import React from 'react';
import { useParams } from 'react-router-dom';
import Discription from '../../componets/Discription/Discription';
import Footer from '../../componets/Footer/Footer';
import Header from '../../componets/Header/Header';
import Player from '../../componets/Player/Player';
import { useGetCurrentAnimeQuery } from '../../redux/api/query';
import styles from './Anime.module.scss';
import AnimeControls from '../../componets/AnimeControls/AnimeControls';
import { useAuth } from '../../hooks/useAuth';
import { useAppDispatch } from '../../redux/hooks';
import Recommended from '../../componets/Recommended/Recommended';
import Characters from '../../componets/Charatcer/Characters';
import { setIsOpenPopupLogin } from '../../redux/filterSlice/filterSlice';
import Relations from '../../componets/Relations/Relations';
import Loader from '../../componets/Loader/Loader';
import Error from '../Error/Error';

const Anime = () => {
  const { id } = useParams();
  const dispatch = useAppDispatch();
  const { data: currentAnime, isFetching, isSuccess, isError } = useGetCurrentAnimeQuery(id!);
  const { isAuth } = useAuth();

  if (isFetching) {
    return <Loader />;
  }

  if (isError) {
    return <Error />;
  }

  const handleClickLogin = () => {
    dispatch(setIsOpenPopupLogin(true));
  };

  return (
    <div className={styles.wrapper}>
      <Header />
      <main>
        <div className={styles.Background}>
          <div className={styles.Overlay}>
            <div className={styles.Container}>
              <div className={styles.ImgContaier}>
                <img className={styles.Image} src={currentAnime?.image} alt="anime" />
                <div className={styles.BtnContainer}>
                  {isAuth ? (
                    <AnimeControls currentAnime={currentAnime} />
                  ) : (
                    <button onClick={handleClickLogin} className="loginButton">
                      Login
                    </button>
                  )}
                </div>
              </div>
              <Discription currentAnime={currentAnime} />
            </div>
          </div>
        </div>
        {currentAnime?.type === 'MANGA' || !currentAnime?.episodes.length ? (
          ''
        ) : (
          <Player currentAnime={currentAnime} isSuccess={isSuccess} />
        )}
        <Characters currentAnime={currentAnime} />
        {currentAnime?.recommendations.length ? <Recommended currentAnime={currentAnime} /> : null}
        {currentAnime?.relations.length ? <Relations currentAnime={currentAnime} /> : null}
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
