export type AnimeItem = {
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

export interface SearchAnime {
  animeId: string;
  animeTitle: string;
  animeImg: string;
  releasedData: string;
}

export interface AnimeObject extends SearchAnime {
  status: string;
}

export type Video = {
  Referer: string;
};

export enum StatusServer {
  LOADING = 'loading',
  SUCCESS = 'success',
  ERROR = 'error',
}

export interface AnimeSliceState {
  currentItem: AnimeItem | null;
  tokyoRevenger: AnimeItem | null;
  nagatoro: AnimeItem | null;
  tokyoRevengerStatus: StatusServer;
  video: Video | null;
  statusPopularAnime: StatusServer;
  statusTopAiringAnimes: StatusServer;
  statusMoviesAph: StatusServer;
  statusMoviesAnimes: StatusServer;
  statusVideoAnime: StatusServer;
  statusRecentEpisodes: StatusServer;
  statusSearch: StatusServer;
  statusGenre: StatusServer;
  status: StatusServer;
  popularAnimes: AnimeObject[];
  topAiringAnimes: AnimeObject[];
  moviesAph: SearchAnime[];
  searchAnime: SearchAnime[];
  moviesAnimes: AnimeObject[];
  genreAnime: AnimeObject[];
}
