import { IProfileAnime } from '../redux/profileSlice/types';

export const getAnimeFromLocalStorage = () => {
  // const massive = localStorage.getItem('favorite');
  return [];
};

export const getAnimePlannedFromLocalStorage = () => {
  // const massive = localStorage.getItem('planned');
  return [];
};

export const getCurrentAnimeArray = (
  listName: string,
  planned: IProfileAnime[],
  favorites: IProfileAnime[],
  reviewing: IProfileAnime[],
) => {
  switch (listName) {
    case 'planned':
      return planned;
    case 'favorites':
      return favorites;
    case 'reviewing':
      return reviewing;
    default:
      return [];
  }
};
