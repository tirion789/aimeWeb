import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { AnimeApi, AnimeObject, CurrentAnime, SearchAnime, Video } from './types';

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
  }),
});

export const {
  useGetPopularAnimeQuery,
  useGetTopAiringAnimeQuery,
  useGetCurrentAnimeQuery,
  useGetAnimeViedoQuery,
  useGetFiltersAnimeQuery,
} = animeApi;

export const fetchAnime = createAsyncThunk('anime/fetchAnime', async (id: string) => {
  const { data } = await axios.get<CurrentAnime>(
    'https://api.consumet.org/meta/anilist/info/' + id,
  );
  return data;
});

export const fetchVideoAnime = createAsyncThunk(
  'anime/fetcVideoAnime',
  async (params: { currentEpisode: string | undefined }) => {
    const { currentEpisode } = params;
    const { data } = await axios.get<Video>(
      `https://api.consumet.org/meta/anilist/watch/${currentEpisode}`,
    );
    return data;
  },
);

export const fetchSearchAnime = createAsyncThunk('anime/searchAnime', async (value: string) => {
  const { data } = await axios.get<AnimeApi>(
    `https://api.consumet.org/meta/anilist/${value === '' ? 'empty value' : value}`,
  );
  return data.results;
});

// export const fetchGenresAnime = createAsyncThunk(
//   'anime/genreAnime',
//   async (params: {
//     genreText: string;
//     currentPaginationButton: number;
//     season: string;
//     format: string;
//     type: string;
//   }) => {
//     const { genreText, currentPaginationButton, season, format, type } = params;
//     const { data } = await axios.get<AnimeApi>(
//       `https://api.consumet.org/meta/anilist/advanced-search?${
//         genreText === 'Any' ? '' : `genres=["${genreText}"]`
//       }${season === 'Any' ? '' : `&season=${season}`}${
//         format === 'Any' ? '' : `&format=${format}`
//       }&type=${type}&page=${currentPaginationButton}`,
//     );
//     return data.results;
//   },
// );

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

export const fetchNagatoro = createAsyncThunk('anime/Nagatoro', async () => {
  const { data } = await axios.get<CurrentAnime>(
    `https://api.consumet.org/meta/anilist/info/${142853}`,
  );
  return data;
});
