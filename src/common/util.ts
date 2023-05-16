import { toast } from 'react-toastify';
import { ProfileAnime } from '../redux/profileSlice/types';
import 'react-toastify/dist/ReactToastify.css';

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
) => usedArray.filter((obj) => obj.title.romaji !== actionPayload);

export const getPushCurrentlyObjectInArray = (
  usedArray: ProfileAnime[],
  firstUnusedArray: ProfileAnime[],
  secondUnusedArray: ProfileAnime[],
  actionPayload: ProfileAnime,
): ReplacedAnime => {
  const newArray = [...usedArray, actionPayload];
  getDeletedCurrentAnimeFromProfile(firstUnusedArray, actionPayload.title.romaji);
  getDeletedCurrentAnimeFromProfile(secondUnusedArray, actionPayload.title.romaji);
  return {
    mainArray: newArray,
    firstArray: getDeletedCurrentAnimeFromProfile(firstUnusedArray, actionPayload.title.romaji),
    secondArray: getDeletedCurrentAnimeFromProfile(secondUnusedArray, actionPayload.title.romaji),
  };
};

export const getNormalizeTitle = (string: string) => {
  const lowerCaseString = string.toLowerCase();
  return lowerCaseString.charAt(0).toUpperCase() + lowerCaseString.slice(1);
};

export const getToast = (title: string, list: string) => {
  toast.success(`${title} adding to your ${list} list`, {
    position: 'bottom-right',
    autoClose: 3000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: 'dark',
  });
};

export const deleteAnimeToast = (title: string, list: string) => {
  toast.info(`${title} delete from your ${list} list`, {
    position: 'bottom-right',
    autoClose: 3000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: 'dark',
  });
};
