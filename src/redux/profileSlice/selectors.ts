import { RootState } from '../store';
import { listNames } from './types';
export const favorite = (state: RootState) => state.profile.favorites;
export const planned = (state: RootState) => state.profile.planned;
export const reviewing = (state: RootState) => state.profile.reviewing;
export const activeButton = (state: RootState) => state.profile.activeButton;
export const getCurrentAnime = (state: RootState, animeTitle?: string) => {
  const activeList = state.profile.activeButton;
  if (activeList && animeTitle) {
    return state.profile[activeList].find((item) => item.animeTitle === animeTitle);
  }
};
export const getAnimeListName = (state: RootState, animeName?: string) => {
  if (!animeName) {
    return '';
  }
  const favotires = state.profile.favorites.some(({ animeTitle }) => animeTitle === animeName);
  const planned = state.profile.planned.some(({ animeTitle }) => animeTitle === animeName);
  const reviewing = state.profile.reviewing.some(({ animeTitle }) => animeTitle === animeName);
  if (favotires) {
    return listNames.FAVORITES;
  }
  if (planned) {
    return listNames.PLANNED;
  }
  if (reviewing) {
    return listNames.REVIEWING;
  }
};
