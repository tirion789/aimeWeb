import { RootState } from '../store';

export const animeSelector = (state: RootState) => state.anime;

export const statusPlayerSelector = (state: RootState) => state.anime.statusVideoAnime;

export const statusTokyoRevengerSelector = (state: RootState) => state.anime.tokyoRevengerStatus;

export const currentItemSelector = (state: RootState) => state.anime.currentItem;

export const videoSelector = (state: RootState) => state.anime.video;

export const searchSelector = (state: RootState) => state.anime.searchAnime;

export const genreSelector = (state: RootState) => state.anime.genreAnime;

export const moviesSelector = (state: RootState) => state.anime.moviesAnimes;

export const aphSelector = (state: RootState) => state.anime.moviesAph;

export const tokyoRevengerSelector = (state: RootState) => state.anime.tokyoRevenger;

export const nagatoroSanSelector = (state: RootState) => state.anime.nagatoro;
