import React from 'react';
import Home from '../../pages/Home/Home';
import { Routes, Route } from 'react-router-dom';
import Anime from '../../pages/Anime/Anime';
import GenrePage from '../../pages/GenrePage/GenrePage';
import Movies from '../../pages/Movies/Movies';
import Profile from '../../pages/Profile/Profile';
import InDevelopment from '../../pages/InDevelopment/InDevelopment';
import AlphabetAnime from '../../pages/AlphabetAnime/AlphabetAnime';
import '../../assets/scss/index.scss';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/anime/:animeId" element={<Anime />} />
      <Route path="/genre/:genreText" element={<GenrePage />} />
      <Route path="/movies" element={<Movies />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/inDevelopment" element={<InDevelopment />} />
      <Route path="/AlphabetAnime/:letter" element={<AlphabetAnime />} />
    </Routes>
  );
};

export { App };
