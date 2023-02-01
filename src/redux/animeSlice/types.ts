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

export interface IAnimeSliceState {
  currentItem: animeItem | null;
  video: video | null;
  statusPopularAnime: StatusPopularAnime;
  statusTopAiringAnimes: StatusTopAiringAnime;
  statusVideoAnime: StatusVideoAnime;
  popularAnimes: popularAnimes[];
  topAiringAnimes: topAiringAnimes[];
  status: StatusAnimes;
}
