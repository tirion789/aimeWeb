import { IProfileAnime } from '../../redux/profileSlice/types';

export interface IProfileList {
  title: string;
  items: IProfileAnime[];
  handleDeleteButtonClick: (title: string) => void;
}
