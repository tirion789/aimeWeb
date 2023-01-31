export type animeItem = {
  names: { en: string; ru: string };
  description: string;
  code: string;
  posters: { medium: { url: string }; original: { url: string }; small: { url: string } };
  player: { alternative_player: string };
  genres: string[];
  status: { string: string };
  type: { episodes: number; string: string; length: number };
  announce: string;
  season: { string: string; year: number };
  team: { voice: string[] };
};

export enum StatusAnimes {
  LOADING = 'loading',
  SUCCESS = 'success',
  ERROR = 'error',
}

export enum StatusAnime {
  LOADING = 'loading',
  SUCCESS = 'success',
  ERROR = 'error',
}

export interface IAnimeSliceState {
  currentItem: animeItem | null;
  items: animeItem[];
  status: StatusAnimes;
  statusAnime: StatusAnime;
}
