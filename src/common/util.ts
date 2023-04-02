import { ProfileAnime } from '../redux/profileSlice/types';

interface ReplacedAnime {
  mainArray: ProfileAnime[];
  firstArray: ProfileAnime[];
  secondArray: ProfileAnime[];
}

export const getCurrentAnimeArray = (
  listName: string,
  planned: ProfileAnime[],
  favorites: ProfileAnime[],
  reviewing: ProfileAnime[],
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

export const getDeletedCurrentAnimeFromProfile = (
  usedArray: ProfileAnime[],
  actionPayload: string,
) => usedArray.filter((obj) => obj.animeTitle !== actionPayload);

export const getPushCurrentlyObjectInArray = (
  usedArray: ProfileAnime[],
  firstUnusedArray: ProfileAnime[],
  secondUnusedArray: ProfileAnime[],
  actionPayload: ProfileAnime,
): ReplacedAnime => {
  const newArray = [...usedArray, actionPayload];
  getDeletedCurrentAnimeFromProfile(firstUnusedArray, actionPayload.animeTitle);
  getDeletedCurrentAnimeFromProfile(secondUnusedArray, actionPayload.animeTitle);
  return {
    mainArray: newArray,
    firstArray: getDeletedCurrentAnimeFromProfile(firstUnusedArray, actionPayload.animeTitle),
    secondArray: getDeletedCurrentAnimeFromProfile(secondUnusedArray, actionPayload.animeTitle),
  };
};
