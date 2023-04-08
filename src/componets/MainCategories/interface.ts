import { AnimeArray } from '../../redux/animeSlice/types';

export interface MainCategoriesProps {
  items?: AnimeArray[];
  isError: boolean;
  name: string;
}
