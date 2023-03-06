import { RootState } from '../store';
export const favorite = (state: RootState) => state.profile.items;
export const planned = (state: RootState) => state.profile.planned;
export const reviewing = (state: RootState) => state.profile.reviewing;
export const getAnimeListName = (state: RootState, animeName?: string) => {
  if (!animeName) {
    return '';
  }
  const favotires = state.profile.items.some(({ animeTitle }) => animeTitle === animeName);
  const planned = state.profile.planned.some(({ animeTitle }) => animeTitle === animeName);
  const reviewing = state.profile.reviewing.some(({ animeTitle }) => animeTitle === animeName);
  if (favotires) {
    return 'favorite';
  }
  if (planned) {
    return 'planned';
  }
  if (reviewing) {
    return 'reviewing';
  }
};
