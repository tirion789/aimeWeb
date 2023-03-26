export type animeItem = {
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
};

export interface ISearchAnime {
  animeId: string;
  animeTitle: string;
  animeImg: string;
  releasedData: string;
}

export interface IAnimeObject extends ISearchAnime {
  status: string;
}

export type video = {
  Referer: string;
};

export enum StatusServer {
  LOADING = 'loading',
  SUCCESS = 'success',
  ERROR = 'error',
}

export interface IAnimeSliceState {
  currentItem: animeItem | null;
  tokyoRevenger: animeItem | null;
  nagatoro: animeItem | null;
  tokyoRevengerStatus: StatusServer;
  video: video | null;
  statusPopularAnime: StatusServer;
  statusTopAiringAnimes: StatusServer;
  statusMoviesAph: StatusServer;
  statusMoviesAnimes: StatusServer;
  statusVideoAnime: StatusServer;
  statusRecentEpisodes: StatusServer;
  statusSearch: StatusServer;
  statusGenre: StatusServer;
  status: StatusServer;
  popularAnimes: IAnimeObject[];
  topAiringAnimes: IAnimeObject[];
  moviesAph: ISearchAnime[];
  searchAnime: ISearchAnime[];
  moviesAnimes: IAnimeObject[];
  genreAnime: IAnimeObject[];
}
