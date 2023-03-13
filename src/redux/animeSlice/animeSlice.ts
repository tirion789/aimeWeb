import { createSlice } from '@reduxjs/toolkit';
import {
  fetchAnime,
  fetchGenresAnime,
  fetchMoviesAnime,
  fetchMoviesAnimeAph,
  fetchPopularAnimes,
  fetchRecentEpisodes,
  fetchSearchAnime,
  fetchTopAiringAnimes,
  fetchVideoAnime,
} from './asyncAction';
import {
  IAnimeSliceState,
  StatusAnimes,
  StatusGenre,
  StatusMovieAnimes,
  StatusMoviesAph,
  StatusPopularAnime,
  StatusRecentEpisodes,
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
  statusMoviesAnimes: StatusMovieAnimes.LOADING,
  moviesAnimes: [],
  statusRecentEpisodes: StatusRecentEpisodes.LOADING,
  recentEpisodes: [],
  moviesAph: [],
  statusMoviesAph: StatusMoviesAph.LOADING,
};

const animeSlice = createSlice({
  name: 'animeSlice',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    // get popular anime
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

    // get top airing anime
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

    // get current anime
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

    // get player video
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

    // get search anime
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

    // get anime genre
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

    // get movies anime
    builder.addCase(fetchMoviesAnime.pending, (state) => {
      state.statusMoviesAnimes = StatusMovieAnimes.LOADING;
      state.moviesAnimes = [];
    });
    builder.addCase(fetchMoviesAnime.fulfilled, (state, action) => {
      state.moviesAnimes = action.payload;
      state.statusMoviesAnimes = StatusMovieAnimes.SUCCESS;
    });
    builder.addCase(fetchMoviesAnime.rejected, (state) => {
      state.statusMoviesAnimes = StatusMovieAnimes.ERROR;
      state.moviesAnimes = [];
    });

    // get recent episodes
    builder.addCase(fetchRecentEpisodes.pending, (state) => {
      state.statusRecentEpisodes = StatusRecentEpisodes.LOADING;
      state.recentEpisodes = [];
    });
    builder.addCase(fetchRecentEpisodes.fulfilled, (state, action) => {
      state.recentEpisodes = action.payload;
      state.statusRecentEpisodes = StatusRecentEpisodes.SUCCESS;
    });
    builder.addCase(fetchRecentEpisodes.rejected, (state) => {
      state.statusRecentEpisodes = StatusRecentEpisodes.ERROR;
      state.recentEpisodes = [];
    });

    // get moviesAph
    builder.addCase(fetchMoviesAnimeAph.pending, (state) => {
      state.statusMoviesAph = StatusMoviesAph.LOADING;
      state.recentEpisodes = [];
    });
    builder.addCase(fetchMoviesAnimeAph.fulfilled, (state, action) => {
      state.moviesAph = action.payload;
      state.statusMoviesAph = StatusMoviesAph.SUCCESS;
    });
    builder.addCase(fetchMoviesAnimeAph.rejected, (state) => {
      state.statusMoviesAph = StatusMoviesAph.ERROR;
      state.recentEpisodes = [];
    });
  },
});

export const {} = animeSlice.actions;

export default animeSlice.reducer;
