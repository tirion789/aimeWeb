import { createSlice } from '@reduxjs/toolkit';
import {
  fetchAnime,
  fetchGenresAnime,
  fetchMoviesAnime,
  fetchMoviesAnimeAph,
  fetchNagatoro,
  fetchSearchAnime,
  fetchTokyoRevenger,
  fetchVideoAnime,
} from './asyncAction';
import { AnimeSliceState, StatusServer } from './types';

const initialState: AnimeSliceState = {
  currentItem: null,
  tokyoRevenger: null,
  status: StatusServer.LOADING,
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
      state.statusGenre = StatusServer.SUCCESS;
      state.genreAnime = action.payload;
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
