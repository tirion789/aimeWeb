import { createSlice } from '@reduxjs/toolkit';
import {
  fetchAnime,
  fetchGenresAnime,
  fetchPopularAnimes,
  fetchSearchAnime,
  fetchTopAiringAnimes,
  fetchVideoAnime,
} from './asyncAction';
import {
  IAnimeSliceState,
  StatusAnimes,
  StatusGenre,
  StatusPopularAnime,
  StatusSearch,
  StatusTopAiringAnime,
  StatusVideoAnime,
} from './types';

const initialState: IAnimeSliceState = {
  currentItem: null,
  popularAnimes: [],
  topAiringAnimes: [],
  statusPopularAnime: StatusPopularAnime.LOADING,
  status: StatusAnimes.LOADING,
  statusTopAiringAnimes: StatusTopAiringAnime.LOADING,
  video: null,
  statusVideoAnime: StatusVideoAnime.LOADING,
  searchAnime: [],
  statusSearch: StatusSearch.LOADING,
  genreAnime: [],
  statusGenre: StatusGenre.LOADING,
};

const animeSlice = createSlice({
  name: 'animeSlice',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchPopularAnimes.pending, (state) => {
      state.statusPopularAnime = StatusPopularAnime.LOADING;
      state.popularAnimes = [];
    });
    builder.addCase(fetchPopularAnimes.fulfilled, (state, action) => {
      state.popularAnimes = action.payload;
      state.statusPopularAnime = StatusPopularAnime.SUCCESS;
    });
    builder.addCase(fetchPopularAnimes.rejected, (state) => {
      state.statusPopularAnime = StatusPopularAnime.ERROR;
      state.topAiringAnimes = [];
    });
    builder.addCase(fetchTopAiringAnimes.pending, (state) => {
      state.statusTopAiringAnimes = StatusTopAiringAnime.LOADING;
      state.popularAnimes = [];
    });
    builder.addCase(fetchTopAiringAnimes.fulfilled, (state, action) => {
      state.topAiringAnimes = action.payload;
      state.statusTopAiringAnimes = StatusTopAiringAnime.SUCCESS;
    });
    builder.addCase(fetchTopAiringAnimes.rejected, (state) => {
      state.statusTopAiringAnimes = StatusTopAiringAnime.ERROR;
      state.topAiringAnimes = [];
    });
    builder.addCase(fetchAnime.pending, (state) => {
      state.status = StatusAnimes.LOADING;
      state.currentItem = null;
    });
    builder.addCase(fetchAnime.fulfilled, (state, action) => {
      state.currentItem = action.payload;
      state.status = StatusAnimes.SUCCESS;
    });
    builder.addCase(fetchAnime.rejected, (state) => {
      state.status = StatusAnimes.ERROR;
      state.currentItem = null;
    });
    builder.addCase(fetchVideoAnime.pending, (state) => {
      state.statusVideoAnime = StatusVideoAnime.LOADING;
      state.video = null;
    });
    builder.addCase(fetchVideoAnime.fulfilled, (state, action) => {
      state.video = action.payload;
      state.statusVideoAnime = StatusVideoAnime.SUCCESS;
    });
    builder.addCase(fetchVideoAnime.rejected, (state) => {
      state.statusVideoAnime = StatusVideoAnime.ERROR;
      state.video = null;
    });
    builder.addCase(fetchSearchAnime.pending, (state) => {
      state.statusSearch = StatusSearch.LOADING;
      state.searchAnime = [];
    });
    builder.addCase(fetchSearchAnime.fulfilled, (state, action) => {
      state.searchAnime = action.payload;
      state.statusSearch = StatusSearch.SUCCESS;
    });
    builder.addCase(fetchSearchAnime.rejected, (state) => {
      state.statusSearch = StatusSearch.ERROR;
      state.searchAnime = [];
    });
    builder.addCase(fetchGenresAnime.pending, (state) => {
      state.statusGenre = StatusGenre.LOADING;
      state.genreAnime = [];
    });
    builder.addCase(fetchGenresAnime.fulfilled, (state, action) => {
      state.genreAnime = action.payload;
      state.statusGenre = StatusGenre.SUCCESS;
    });
    builder.addCase(fetchGenresAnime.rejected, (state) => {
      state.statusGenre = StatusGenre.ERROR;
      state.genreAnime = [];
    });
  },
});

export const {} = animeSlice.actions;

export default animeSlice.reducer;
