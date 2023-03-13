export interface IAnime {
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

export enum listNames {
  FAVORITES = 'favorites',
  PLANNED = 'planned',
  REVIEWING = 'reviewing',
}

export interface ICurrentSeries {
  title: string;
  series: string;
}

export interface IProfileAnime extends IAnime {
  currentAnimeSeries?: string;
}

export interface IProfileSlice {
  favorites: IProfileAnime[];
  planned: IProfileAnime[];
  reviewing: IProfileAnime[];
  activeButton: listNames | null;
}
