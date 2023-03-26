import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { animeItem, IAnimeObject, ISearchAnime, video } from './types';

export const fetchPopularAnimes = createAsyncThunk<IAnimeObject[]>(
  'animes/fetchAnimesPopularStatus',
  async () => {
    const { data } = await axios.get<IAnimeObject[]>('https://gogoanime.consumet.stream/popular');
    return data;
  },
);

export const fetchTopAiringAnimes = createAsyncThunk<IAnimeObject[]>(
  'animes/fetchAnimesTopAiring',
  async () => {
    const { data } = await axios.get<IAnimeObject[]>(
      'https://gogoanime.consumet.stream/top-airing',
    );
    return data;
  },
);

export const fetchAnime = createAsyncThunk('anime/fetchAnime', async (animeId: string) => {
  const { data } = await axios.get<animeItem>(
    'https://gogoanime.consumet.stream/anime-details/' + animeId,
  );
  return data;
});

export const fetchVideoAnime = createAsyncThunk(
  'anime/fetcVideoAnime',
  async (params: { animeId: string; series: string | number | null }) => {
    const { animeId, series } = params;
    const { data } = await axios.get<video>(
      `https://gogoanime.consumet.stream/vidcdn/watch/${animeId}-episode-${series}`,
    );
    return data;
  },
);

export const fetchSearchAnime = createAsyncThunk('anime/searchAnime', async (value: string) => {
  const { data } = await axios.get<ISearchAnime[]>(
    `https://gogoanime.consumet.stream/search?keyw=${value}`,
  );
  return data;
});

export const fetchGenresAnime = createAsyncThunk(
  'anime/genreAnime',
  async (params: { genreText: string; currentPaginationButton: string }) => {
    const { genreText, currentPaginationButton } = params;
    const { data } = await axios.get<IAnimeObject[]>(
      `https://gogoanime.consumet.stream/genre/${genreText}?page=${currentPaginationButton}`,
    );
    return data;
  },
);

export const fetchMoviesAnime = createAsyncThunk('anime/moviesAnime', async () => {
  const { data } = await axios.get<IAnimeObject[]>(
    'https://gogoanime.consumet.stream/anime-movies',
  );
  return data;
});

export const fetchMoviesAnimeAph = createAsyncThunk(
  'anime/moviesAnimeAph',
  async (currentLetter: string) => {
    const { data } = await axios.get<ISearchAnime[]>(
      `https://gogoanime.consumet.stream/anime-movies?aph=${currentLetter}`,
    );
    return data;
  },
);

export const fetchTokyoRevenger = createAsyncThunk('anime/tokyoRevenger', async () => {
  const { data } = await axios.get<animeItem>(
    'https://gogoanime.consumet.stream/anime-details/tokyo-revengers-seiya-kessen-hen',
  );
  return data;
});

export const fetchNagatoro = createAsyncThunk('anime/Nagatoro', async () => {
  const { data } = await axios.get<animeItem>(
    'https://gogoanime.consumet.stream/anime-details/ijiranaide-nagatoro-san-2nd-attack',
  );
  return data;
});
