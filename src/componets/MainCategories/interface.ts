import { AnimeArray } from '../../redux/api/types';

export interface MainCategoriesProps {
  items?: AnimeArray[];
  isError: boolean;
  name: string;
}
