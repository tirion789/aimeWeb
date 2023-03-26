import { createSlice } from '@reduxjs/toolkit';
import {
  fetchAnime,
  fetchGenresAnime,
  fetchMoviesAnime,
  fetchMoviesAnimeAph,
  fetchNagatoro,
  fetchPopularAnimes,
  fetchSearchAnime,
  fetchTokyoRevenger,
  fetchTopAiringAnimes,
  fetchVideoAnime,
} from './asyncAction';
import { IAnimeSliceState, StatusServer } from './types';

const initialState: IAnimeSliceState = {
  currentItem: null,
  tokyoRevenger: null,
  popularAnimes: [],
  topAiringAnimes: [],
  statusPopularAnime: StatusServer.LOADING,
  status: StatusServer.LOADING,
  statusTopAiringAnimes: StatusServer.LOADING,
  video: null,
  statusVideoAnime: StatusServer.LOADING,
  searchAnime: [],
  statusSearch: StatusServer.LOADING,
  genreAnime: [],
  statusGenre: StatusServer.LOADING,
  statusMoviesAnimes: StatusServer.LOADING,
  moviesAnimes: [],
  statusRecentEpisodes: StatusServer.LOADING,
  moviesAph: [],
  statusMoviesAph: StatusServer.LOADING,
  tokyoRevengerStatus: StatusServer.LOADING,
  nagatoro: null,
};

const animeSlice = createSlice({
  name: 'animeSlice',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    // get popular anime
    builder.addCase(fetchPopularAnimes.pending, (state) => {
      state.statusPopularAnime = StatusServer.LOADING;
      state.popularAnimes = [];
    });
    builder.addCase(fetchPopularAnimes.fulfilled, (state, action) => {
      state.popularAnimes = action.payload;
      state.statusPopularAnime = StatusServer.SUCCESS;
    });
    builder.addCase(fetchPopularAnimes.rejected, (state) => {
      state.statusPopularAnime = StatusServer.ERROR;
      state.topAiringAnimes = [];
    });

    // get top airing anime
    builder.addCase(fetchTopAiringAnimes.pending, (state) => {
      state.statusTopAiringAnimes = StatusServer.LOADING;
      state.popularAnimes = [];
    });
    builder.addCase(fetchTopAiringAnimes.fulfilled, (state, action) => {
      state.topAiringAnimes = action.payload;
      state.statusTopAiringAnimes = StatusServer.SUCCESS;
    });
    builder.addCase(fetchTopAiringAnimes.rejected, (state) => {
      state.statusTopAiringAnimes = StatusServer.ERROR;
      state.topAiringAnimes = [];
    });

    // get current anime
    builder.addCase(fetchAnime.pending, (state) => {
      state.status = StatusServer.LOADING;
      state.currentItem = null;
    });
    builder.addCase(fetchAnime.fulfilled, (state, action) => {
      state.currentItem = action.payload;
      state.status = StatusServer.SUCCESS;
    });
    builder.addCase(fetchAnime.rejected, (state) => {
      state.status = StatusServer.ERROR;
      state.currentItem = null;
    });

    // tokyo revenger
    builder.addCase(fetchTokyoRevenger.pending, (state) => {
      state.tokyoRevengerStatus = StatusServer.LOADING;
    });
    builder.addCase(fetchTokyoRevenger.fulfilled, (state, action) => {
      state.tokyoRevenger = action.payload;
      state.tokyoRevengerStatus = StatusServer.SUCCESS;
    });
    builder.addCase(fetchTokyoRevenger.rejected, (state) => {
      state.tokyoRevengerStatus = StatusServer.ERROR;
    });

    // nagatoro

    builder.addCase(fetchNagatoro.pending, (state) => {
      state.status = StatusServer.LOADING;
      state.nagatoro = null;
    });
    builder.addCase(fetchNagatoro.fulfilled, (state, action) => {
      state.nagatoro = action.payload;
      state.status = StatusServer.SUCCESS;
    });
    builder.addCase(fetchNagatoro.rejected, (state) => {
      state.status = StatusServer.ERROR;
      state.nagatoro = null;
    });

    // get player video
    builder.addCase(fetchVideoAnime.pending, (state) => {
      state.statusVideoAnime = StatusServer.LOADING;
      state.video = null;
    });
    builder.addCase(fetchVideoAnime.fulfilled, (state, action) => {
      state.video = action.payload;
      state.statusVideoAnime = StatusServer.SUCCESS;
    });
    builder.addCase(fetchVideoAnime.rejected, (state) => {
      state.statusVideoAnime = StatusServer.ERROR;
      state.video = null;
    });

    // get search anime
    builder.addCase(fetchSearchAnime.pending, (state) => {
      state.statusSearch = StatusServer.LOADING;
      state.searchAnime = [];
    });
    builder.addCase(fetchSearchAnime.fulfilled, (state, action) => {
      state.searchAnime = action.payload;
      state.statusSearch = StatusServer.SUCCESS;
    });
    builder.addCase(fetchSearchAnime.rejected, (state) => {
      state.statusSearch = StatusServer.ERROR;
      state.searchAnime = [];
    });

    // get anime genre
    builder.addCase(fetchGenresAnime.pending, (state) => {
      state.statusGenre = StatusServer.LOADING;
      state.genreAnime = [];
    });
    builder.addCase(fetchGenresAnime.fulfilled, (state, action) => {
      state.genreAnime = action.payload;
      state.statusGenre = StatusServer.SUCCESS;
    });
    builder.addCase(fetchGenresAnime.rejected, (state) => {
      state.statusGenre = StatusServer.ERROR;
      state.genreAnime = [];
    });

    // get movies anime
    builder.addCase(fetchMoviesAnime.pending, (state) => {
      state.statusMoviesAnimes = StatusServer.LOADING;
      state.moviesAnimes = [];
    });
    builder.addCase(fetchMoviesAnime.fulfilled, (state, action) => {
      state.moviesAnimes = action.payload;
      state.statusMoviesAnimes = StatusServer.SUCCESS;
    });
    builder.addCase(fetchMoviesAnime.rejected, (state) => {
      state.statusMoviesAnimes = StatusServer.ERROR;
      state.moviesAnimes = [];
    });

    // get moviesAph
    builder.addCase(fetchMoviesAnimeAph.pending, (state) => {
      state.statusMoviesAph = StatusServer.LOADING;
      state.moviesAph = [];
    });
    builder.addCase(fetchMoviesAnimeAph.fulfilled, (state, action) => {
      state.moviesAph = action.payload;
      state.statusMoviesAph = StatusServer.SUCCESS;
    });
    builder.addCase(fetchMoviesAnimeAph.rejected, (state) => {
      state.statusMoviesAph = StatusServer.ERROR;
      state.moviesAph = [];
    });
  },
});

export const {} = animeSlice.actions;

export default animeSlice.reducer;
