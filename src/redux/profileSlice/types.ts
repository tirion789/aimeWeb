export interface Anime {
  animeImg: string;
  animeTitle: string;
  genres: string[];
  otherNames: string;
  releasedDate: string;
  status: string;
  synopsis: string;
  totalEpisodes: string;
  type: string;
  episodesList: { episodeId: string; episodeNum: string; episodeUrl: string }[];
}

export enum ListNames {
  FAVORITES = 'favorites',
  PLANNED = 'planned',
  REVIEWING = 'reviewing',
}

export interface CurrentSeries {
  title: string;
  series: string;
}

export interface ProfileAnime extends Anime {
  currentAnimeSeries?: string;
}

export interface ProfileSlice {
  favorites: ProfileAnime[];
  planned: ProfileAnime[];
  reviewing: ProfileAnime[];
  activeButton: ListNames | null;
}
