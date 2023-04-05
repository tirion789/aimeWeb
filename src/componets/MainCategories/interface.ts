import { AnimeArray } from '../../redux/animeSlice/types';

export interface MainCategoriesProps {
  items: AnimeArray[];
  status: string;
  name: string;
}
