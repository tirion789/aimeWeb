export interface FiltersListItemProps {
  id: string;
  image: string;
  title: { romaji: string; english: string; native: string };
  totalEpisodes: number;
  rating: number;
}
