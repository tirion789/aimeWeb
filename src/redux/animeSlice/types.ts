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

export type popularAnimes = {
  animeId: string;
  animeTitle: string;
  animeImg: string;
  releasedData: string;
  status: string;
};

export type moviesAph = {
  animeId: string;
  animeTitle: string;
  animeImg: string;
  releasedDate: string;
  animeUrl: string;
};

export type recentEpisodes = {
  episodeId: string;
  animeTitle: string;
  episodeNum: string;
  subOrDub: string;
  animeImg: string;
  episodeUrl: string;
};

export type moviesAnimes = {
  animeId: string;
  animeTitle: string;
  animeImg: string;
  releasedData: string;
  status: string;
};

export type genreAnime = {
  animeId: string;
  animeTitle: string;
  animeImg: string;
  releasedData: string;
};

export type searchAnime = {
  animeId: string;
  animeTitle: string;
  animeImg: string;
  releasedData: string;
};

export type topAiringAnimes = {
  animeId: string;
  animeTitle: string;
  animeImg: string;
  releasedDate: string;
};

export type video = {
  Referer: string;
};

export enum StatusPopularAnime {
  LOADING = 'loading',
  SUCCESS = 'success',
  ERROR = 'error',
}

export enum StatusRecentEpisodes {
  LOADING = 'loading',
  SUCCESS = 'success',
  ERROR = 'error',
}

export enum StatusMovieAnimes {
  LOADING = 'loading',
  SUCCESS = 'success',
  ERROR = 'error',
}

export enum StatusVideoAnime {
  LOADING = 'loading',
  SUCCESS = 'success',
  ERROR = 'error',
}

export enum StatusTopAiringAnime {
  LOADING = 'loading',
  SUCCESS = 'success',
  ERROR = 'error',
}

export enum StatusAnimes {
  LOADING = 'loading',
  SUCCESS = 'success',
  ERROR = 'error',
}
export enum StatusSearch {
  LOADING = 'loading',
  SUCCESS = 'success',
  ERROR = 'error',
}

export enum StatusGenre {
  LOADING = 'loading',
  SUCCESS = 'success',
  ERROR = 'error',
}

export enum StatusMoviesAph {
  LOADING = 'loading',
  SUCCESS = 'success',
  ERROR = 'error',
}

export enum StatusTokyoRevenger {
  LOADING = 'loading',
  SUCCESS = 'success',
  ERROR = 'error',
}

export interface IAnimeSliceState {
  currentItem: animeItem | null;
  tokyoRevenger: animeItem | null;
  nagatoro: animeItem | null;
  tokyoRevengerStatus: StatusTokyoRevenger;
  video: video | null;
  statusPopularAnime: StatusPopularAnime;
  statusTopAiringAnimes: StatusTopAiringAnime;
  statusMoviesAph: StatusMoviesAph;
  statusMoviesAnimes: StatusMovieAnimes;
  statusVideoAnime: StatusVideoAnime;
  statusRecentEpisodes: StatusRecentEpisodes;
  statusSearch: StatusSearch;
  statusGenre: StatusGenre;
  status: StatusAnimes;
  popularAnimes: popularAnimes[];
  recentEpisodes: recentEpisodes[];
  topAiringAnimes: topAiringAnimes[];
  moviesAph: moviesAph[];
  searchAnime: searchAnime[];
  moviesAnimes: moviesAnimes[];
  genreAnime: genreAnime[];
}
