import { ProfileAnime } from '../../redux/profileSlice/types';

export interface ProfileListProps {
  title: string;
  items: ProfileAnime[];
  handleDeleteButtonClick: (title: string) => void;
}
