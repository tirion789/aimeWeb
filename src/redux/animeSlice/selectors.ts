import { RootState } from '../store';

export const anime = (state: RootState) => state.anime;

export const statusPopular = (state: RootState) => state.anime.statusPopularAnime;

export const statusTopAiring = (state: RootState) => state.anime.statusTopAiringAnimes;

export const statusPlayer = (state: RootState) => state.anime.statusVideoAnime;

export const statusTokyoRevenger = (state: RootState) => state.anime.tokyoRevengerStatus;

export const popularAnimes = (state: RootState) => state.anime.popularAnimes;

export const topAiringAnimes = (state: RootState) => state.anime.topAiringAnimes;

export const currentItem = (state: RootState) => state.anime.currentItem;

export const video = (state: RootState) => state.anime.video;

export const search = (state: RootState) => state.anime.searchAnime;

export const genre = (state: RootState) => state.anime.genreAnime;

export const movies = (state: RootState) => state.anime.moviesAnimes;

export const aph = (state: RootState) => state.anime.moviesAph;

export const tokyoRevenger = (state: RootState) => state.anime.tokyoRevenger;

export const nagatoroSan = (state: RootState) => state.anime.nagatoro;
