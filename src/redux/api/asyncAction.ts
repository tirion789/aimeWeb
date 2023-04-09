import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { AnimeApi, CurrentAnime, SearchAnime, Video } from './types';

import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const animeApi = createApi({
  reducerPath: 'animeApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://api.consumet.org/meta/anilist/' }),
  endpoints: (builder) => ({
    getPopularAnime: builder.query<AnimeApi, string>({
      query: (name) => name,
    }),
    getTopAiringAnime: builder.query<AnimeApi, string>({
      query: (name) => name,
    }),
    getCurrentAnime: builder.query<CurrentAnime, string>({
      query: (id) => `/info/${id}`,
    }),
    getAnimeViedo: builder.query<Video, string>({
      query: (id) => `/watch/${id}`,
    }),
    getFiltersAnime: builder.query<AnimeApi, string>({
      query: (filters) => `/advanced-search?${filters}`,
    }),
    getAZListAnime: builder.query<AnimeApi, string>({
      query: (latter) => `/advanced-search?query=${latter.toLowerCase()}`,
    }),
    getSearchAnime: builder.query<AnimeApi, string>({
      query: (value) => `${value === '' ? 'empty value' : value}`,
    }),
  }),
});

export const {
  useGetPopularAnimeQuery,
  useGetTopAiringAnimeQuery,
  useGetCurrentAnimeQuery,
  useGetAnimeViedoQuery,
  useGetFiltersAnimeQuery,
  useGetAZListAnimeQuery,
  useGetSearchAnimeQuery,
} = animeApi;

export const fetchMoviesAnimeAph = createAsyncThunk(
  'anime/moviesAnimeAph',
  async (currentLetter: string) => {
    const { data } = await axios.get<SearchAnime[]>(
      `https://gogoanime.consumet.stream/anime-movies?aph=${currentLetter}`,
    );
    return data;
  },
);

export const fetchNagatoro = createAsyncThunk('anime/Nagatoro', async () => {
  const { data } = await axios.get<CurrentAnime>(
    `https://api.consumet.org/meta/anilist/info/${142853}`,
  );
  return data;
});
