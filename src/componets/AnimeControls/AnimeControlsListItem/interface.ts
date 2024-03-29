import { CurrentAnime } from '../../../redux/api/types';
import { ListNames } from '../../../redux/profileSlice/types';

export interface AnimeControlsListItemProps {
  button: ListNames;
  key: number;
  currentAnime?: CurrentAnime | null;
}
