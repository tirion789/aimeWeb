import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { AnimeItem, AnimeObject, SearchAnime, Video } from './types';

import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const animeApi = createApi({
  reducerPath: 'animeApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://gogoanime.consumet.stream/' }),
  endpoints: (builder) => ({
    getPopularAnime: builder.query<AnimeObject[], string>({
      query: (name) => name,
    }),
    getTopAiringAnime: builder.query<AnimeObject[], string>({
      query: (name) => name,
    }),
  }),
});

export const { useGetPopularAnimeQuery, useGetTopAiringAnimeQuery } = animeApi;

export const fetchPopularAnimes = createAsyncThunk<AnimeObject[]>(
  'animes/fetchAnimesPopularStatus',
  async () => {
    const { data } = await axios.get<AnimeObject[]>('https://gogoanime.consumet.stream/popular');
    return data;
  },
);

export const fetchTopAiringAnimes = createAsyncThunk<AnimeObject[]>(
  'animes/fetchAnimesTopAiring',
  async () => {
    const { data } = await axios.get<AnimeObject[]>('https://gogoanime.consumet.stream/top-airing');
    return data;
  },
);

export const fetchAnime = createAsyncThunk('anime/fetchAnime', async (animeId: string) => {
  const { data } = await axios.get<AnimeItem>(
    'https://gogoanime.consumet.stream/anime-details/' + animeId,
  );
  return data;
});

export const fetchVideoAnime = createAsyncThunk(
  'anime/fetcVideoAnime',
  async (params: { animeId: string; series: string | number | null }) => {
    const { animeId, series } = params;
    const { data } = await axios.get<Video>(
      `https://gogoanime.consumet.stream/vidcdn/watch/${animeId}-episode-${series}`,
    );
    return data;
  },
);

export const fetchSearchAnime = createAsyncThunk('anime/searchAnime', async (value: string) => {
  const { data } = await axios.get<SearchAnime[]>(
    `https://gogoanime.consumet.stream/search?keyw=${value}`,
  );
  return data;
});

export const fetchGenresAnime = createAsyncThunk(
  'anime/genreAnime',
  async (params: { genreText: string; currentPaginationButton: number }) => {
    const { genreText, currentPaginationButton } = params;
    const { data } = await axios.get<AnimeObject[]>(
      `https://gogoanime.consumet.stream/genre/${genreText}?page=${currentPaginationButton}`,
    );
    return data;
  },
);

export const fetchMoviesAnime = createAsyncThunk('anime/moviesAnime', async () => {
  const { data } = await axios.get<AnimeObject[]>('https://gogoanime.consumet.stream/anime-movies');
  return data;
});

export const fetchMoviesAnimeAph = createAsyncThunk(
  'anime/moviesAnimeAph',
  async (currentLetter: string) => {
    const { data } = await axios.get<SearchAnime[]>(
      `https://gogoanime.consumet.stream/anime-movies?aph=${currentLetter}`,
    );
    return data;
  },
);

export const fetchTokyoRevenger = createAsyncThunk('anime/tokyoRevenger', async () => {
  const { data } = await axios.get<AnimeItem>(
    'https://gogoanime.consumet.stream/anime-details/tokyo-revengers-seiya-kessen-hen',
  );
  return data;
});

export const fetchNagatoro = createAsyncThunk('anime/Nagatoro', async () => {
  const { data } = await axios.get<AnimeItem>(
    'https://gogoanime.consumet.stream/anime-details/ijiranaide-nagatoro-san-2nd-attack',
  );
  return data;
});
