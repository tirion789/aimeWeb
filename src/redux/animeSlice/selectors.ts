import { RootState } from '../store';

export const anime = (state: RootState) => state.anime;

export const popularAnimes = (state: RootState) => state.anime.popularAnimes;

export const topAiringAnimes = (state: RootState) => state.anime.topAiringAnimes;

export const currentItem = (state: RootState) => state.anime.currentItem;

export const video = (state: RootState) => state.anime.video;
