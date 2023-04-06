export type Recommendations = {
  cover: string;
  episodes: number;
  id: number;
  image: string;
  rating: number;
  status: string;
  title: { romaji: string; english: string; native: string };
  totalEpisodes?: number;
};

export interface AnimeArray {
  cover: string;
  description: string;
  duration: string;
  genres: string[];
  id: string;
  image: string;
  rating: number;
  releaseDate: string;
  status: string;
  title: { romaji: string; english: string; native: string };
  totalEpisodes: number;
  trailer: {
    id: string;
    site: string;
    thumbnail: string;
  };
  type: string;
}

export interface AnimeApi {
  results: AnimeArray[];
  currentPage: number;
  hasNextPage: boolean;
  totalPages?: number;
  totalResults?: number;
}

export interface CurrentAnime extends AnimeArray {
  characters: [
    {
      image: string;
      name: { first: string; full: string; last: string | null; userPreffered: string };
      role: string;
    },
  ];
  countryOfOrigin: string;
  currentEpisode: number;
  endDate: { year: number; month: number; day: number };
  episodes: [
    {
      airData: string;
      description: string;
      id: string;
      image: string;
      number: number;
      title: string;
    },
  ];
  popularity: number;
  recommendations: Recommendations[];
  relations: [
    {
      color: string;
      cover: string;
      id: number;
      rating: number;
      relationType: string;
      status: string;
      title: { romaji: string; english: string; native: string };
      type: string;
    },
  ];
  season: string;
  startDate: { year: number; month: number; day: number };
  studios: string[];
  subOrDub: string;
  synonyms: string[];
  trailer: {
    id: string;
    site: string;
    thumbnail: string;
  };
}

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
  headers: { Referer: string };
};

export enum StatusServer {
  LOADING = 'loading',
  SUCCESS = 'success',
  ERROR = 'error',
}

export interface AnimeSliceState {
  currentItem: CurrentAnime | null;
  tokyoRevenger: CurrentAnime | null;
  nagatoro: CurrentAnime | null;
  tokyoRevengerStatus: StatusServer;
  video: Video | null;
  statusMoviesAph: StatusServer;
  statusMoviesAnimes: StatusServer;
  statusVideoAnime: StatusServer;
  statusRecentEpisodes: StatusServer;
  statusSearch: StatusServer;
  statusGenre: StatusServer;
  status: StatusServer;
  moviesAph: SearchAnime[];
  searchAnime: AnimeArray[];
  moviesAnimes: AnimeObject[];
  genreAnime: AnimeArray[];
}
