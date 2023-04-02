import { AnimeObject } from '../../redux/animeSlice/types';

export interface MainCategoriesProps {
  items: AnimeObject[];
  status: string;
  name: string;
}
