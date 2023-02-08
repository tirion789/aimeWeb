import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import Discription from '../../componets/Discription/Discription';
import Footer from '../../componets/Footer/Footer';
import Header from '../../componets/Header/Header';
import Player from '../../componets/Player/Player';
import { fetchAnime } from '../../redux/animeSlice/asyncAction';
import { currentItem } from '../../redux/animeSlice/selectors';
import { animeItem } from '../../redux/animeSlice/types';
import { deleteAnimes, setItems } from '../../redux/profileSlice/profileSlice';
import { profile } from '../../redux/profileSlice/selectors';
import { useAppDispatch } from '../../redux/store';
import styles from './Anime.module.scss';

const Anime = () => {
  const { animeId } = useParams();
  const dispatch = useAppDispatch();
  const currentAnime = useSelector(currentItem);
  const favoriteItems = useSelector(profile);
  const [addToList, setAddToList] = useState(false);
  const profileArray = useSelector(profile);
  const state = localStorage.getItem('anime' + currentAnime?.animeTitle);
  useEffect(() => {
    setAddToList(JSON.parse(state || 'false'));
    const massives = JSON.stringify(profileArray);
    localStorage.setItem('favorite', massives);
  }, [profileArray, state]);

  console.log(favoriteItems);

  const onClickAdd = () => {
    if (currentAnime) {
      const item: animeItem = {
        animeImg: currentAnime.animeImg,
        animeTitle: currentAnime.animeTitle,
        genres: currentAnime.genres,
        otherNames: currentAnime.otherNames,
        releasedDate: currentAnime.releasedDate,
        status: currentAnime.status,
        synopsis: currentAnime.synopsis,
        totalEpisodes: currentAnime.totalEpisodes,
        type: currentAnime.type,
        episodesList: currentAnime.episodesList,
      };
      dispatch(setItems(item));
      setAddToList(true);
      localStorage.setItem('anime' + currentAnime.animeTitle, JSON.stringify(true));
    }
  };

  const onDeleteAnime = (text: string) => {
    if (currentAnime) {
      dispatch(deleteAnimes(text));
      setAddToList(false);
      localStorage.setItem('anime' + currentAnime.animeTitle, JSON.stringify(false));
    }
  };

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
                  <img width={250} height={350} src={currentAnime?.animeImg} alt="anime" />
                  {!addToList && (
                    <button onClick={onClickAdd} className={styles.Anime__addToList}>
                      Add to list
                    </button>
                  )}
                  {addToList && (
                    <button
                      onClick={() => onDeleteAnime(currentAnime.animeTitle)}
                      className={styles.Anime__addToList}>
                      Remove From List
                    </button>
                  )}
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
