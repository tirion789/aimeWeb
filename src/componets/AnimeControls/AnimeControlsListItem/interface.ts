import { CurrentAnime } from '../../../redux/animeSlice/types';
import { ListNames } from '../../../redux/profileSlice/types';

export interface AnimeControlsListItemProps {
  button: ListNames;
  key: number;
  currentAnime: CurrentAnime | null;
}
