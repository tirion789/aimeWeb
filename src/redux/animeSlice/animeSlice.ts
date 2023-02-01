import { createSlice } from '@reduxjs/toolkit';
import {
  fetchAnime,
  fetchPopularAnimes,
  fetchTopAiringAnimes,
  fetchVideoAnime,
} from './asyncAction';
import {
  IAnimeSliceState,
  StatusAnimes,
  StatusPopularAnime,
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
  },
});

export const {} = animeSlice.actions;

export default animeSlice.reducer;
