import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { animeItem, genreAnime, popularAnimes, searchAnime, topAiringAnimes, video } from './types';

export const fetchPopularAnimes = createAsyncThunk<popularAnimes[]>(
  'animes/fetchAnimesPopularStatus',
  async () => {
    const { data } = await axios.get<popularAnimes[]>('https://gogoanime.consumet.stream/popular');
    return data;
  },
);

export const fetchTopAiringAnimes = createAsyncThunk<topAiringAnimes[]>(
  'animes/fetchAnimesTopAiring',
  async () => {
    const { data } = await axios.get<topAiringAnimes[]>(
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
  async (params: { animeId: string; series: string }) => {
    const { animeId, series } = params;
    const { data } = await axios.get<video>(
      `https://gogoanime.consumet.stream/vidcdn/watch/${animeId}-episode-${series}`,
    );
    return data;
  },
);

export const fetchSearchAnime = createAsyncThunk('anime/searchAnime', async (value: string) => {
  const { data } = await axios.get<searchAnime[]>(
    `https://gogoanime.consumet.stream/search?keyw=${value}`,
  );
  return data;
});

export const fetchGenresAnime = createAsyncThunk('anime/genreAnime', async (genreText: string) => {
  const { data } = await axios.get<genreAnime[]>(
    `https://gogoanime.consumet.stream/genre/${genreText}`,
  );
  return data;
});
