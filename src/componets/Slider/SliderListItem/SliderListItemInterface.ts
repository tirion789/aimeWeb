export interface SliderListItemProps {
  id: string;
  image: string;
  title: { romaji: string; english: string; native: string };
  type: string;
  totalEpisodes?: number;
  episodes: number;
  rating: number;
  activeIndex: number;
}
