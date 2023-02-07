import React from 'react';
import Home from '../../pages/Home/Home';
import { Routes, Route } from 'react-router-dom';
import Anime from '../../pages/Anime/Anime';
import GenrePage from '../../pages/GenrePage/GenrePage';
import Movies from '../../pages/Movies/Movies';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/anime/:animeId" element={<Anime />} />
      <Route path="/genre/:genreText" element={<GenrePage />} />
      <Route path="/movies" element={<Movies />} />
    </Routes>
  );
};

export { App };
