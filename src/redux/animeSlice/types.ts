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

export interface IAnimeSliceState {
  currentItem: animeItem | null;
  video: video | null;
  statusPopularAnime: StatusPopularAnime;
  statusTopAiringAnimes: StatusTopAiringAnime;
  statusMoviesAnimes: StatusMovieAnimes;
  statusVideoAnime: StatusVideoAnime;
  statusSearch: StatusSearch;
  statusGenre: StatusGenre;
  status: StatusAnimes;
  popularAnimes: popularAnimes[];
  topAiringAnimes: topAiringAnimes[];
  searchAnime: searchAnime[];
  moviesAnimes: moviesAnimes[];
  genreAnime: genreAnime[];
}
