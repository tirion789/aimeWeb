import { AnimeArray } from '../api/types';

export enum ListNames {
  FAVORITES = 'favorites',
  PLANNED = 'planned',
  REVIEWING = 'reviewing',
}

export interface CurrentSeries {
  title: string;
  series: number;
}

export interface ProfileAnime extends AnimeArray {
  currentAnimeSeries?: number;
}

export interface ProfileSlice {
  favorites: ProfileAnime[];
  planned: ProfileAnime[];
  reviewing: ProfileAnime[];
  activeButton: ListNames | null;
}
