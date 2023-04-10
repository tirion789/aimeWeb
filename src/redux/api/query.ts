import { AnimeApi, CurrentAnime, Video } from './types';

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
    getAnimeNagataro: builder.query<CurrentAnime, string>({
      query: (nagatoro) => nagatoro,
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
  useGetAnimeNagataroQuery,
} = animeApi;
