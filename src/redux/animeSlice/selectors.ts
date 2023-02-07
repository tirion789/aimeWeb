import { RootState } from '../store';

export const anime = (state: RootState) => state.anime;

export const popularAnimes = (state: RootState) => state.anime.popularAnimes;

export const topAiringAnimes = (state: RootState) => state.anime.topAiringAnimes;

export const currentItem = (state: RootState) => state.anime.currentItem;

export const video = (state: RootState) => state.anime.video;

export const search = (state: RootState) => state.anime.searchAnime;

export const genre = (state: RootState) => state.anime.genreAnime;

export const movies = (state: RootState) => state.anime.moviesAnimes;
