import { RootState } from '../store';
import { ListNames } from './types';
export const favoriteSelector = (state: RootState) => state.profile.favorites;
export const plannedSelector = (state: RootState) => state.profile.planned;
export const reviewingSelector = (state: RootState) => state.profile.reviewing;
export const activeButtonSelector = (state: RootState) => state.profile.activeButton;
export const getCurrentAnimeSelector = (state: RootState, animeTitle?: string) => {
  const activeList = state.profile.activeButton;
  if (activeList && animeTitle) {
    return state.profile[activeList].find((item) => item.animeTitle === animeTitle);
  }
};
export const getAnimeListNameSelector = (state: RootState, animeName?: string) => {
  if (!animeName) {
    return '';
  }
  const favotires = state.profile.favorites.some(({ animeTitle }) => animeTitle === animeName);
  const planned = state.profile.planned.some(({ animeTitle }) => animeTitle === animeName);
  const reviewing = state.profile.reviewing.some(({ animeTitle }) => animeTitle === animeName);
  if (favotires) {
    return ListNames.FAVORITES;
  }
  if (planned) {
    return ListNames.PLANNED;
  }
  if (reviewing) {
    return ListNames.REVIEWING;
  }
};
