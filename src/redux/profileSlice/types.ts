export type addItem = {
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

export interface IProfileSlice {
  items: addItem[];
}
