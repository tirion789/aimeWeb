import { AnimeArray } from '../animeSlice/types';

export enum ListNames {
  FAVORITES = 'favorites',
  PLANNED = 'planned',
  REVIEWING = 'reviewing',
}

export interface CurrentSeries {
  title: string;
  series: string;
}

export interface ProfileAnime extends AnimeArray {
  currentAnimeSeries?: string;
}

export interface ProfileSlice {
  favorites: ProfileAnime[];
  planned: ProfileAnime[];
  reviewing: ProfileAnime[];
  activeButton: ListNames | null;
}
