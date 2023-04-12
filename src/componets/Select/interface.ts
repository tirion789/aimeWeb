import { CurrentAnime } from '../../redux/api/types';

export interface SelectProps {
  series: number;
  handleActiveSeriesClick: (number: number, id: string) => void;
  setSeries: React.Dispatch<React.SetStateAction<number>>;
  handleSwapNextSeries: () => void;
  handleSwapPrevSeries: () => void;
  currentAnime?: CurrentAnime;
}
