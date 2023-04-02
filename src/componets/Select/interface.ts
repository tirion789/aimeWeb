import { MouseEvent } from 'react';

export interface SelectProps {
  arraySeries: number[];
  series: string;
  handleActiveSeriesClick: (event: MouseEvent<HTMLButtonElement>) => void;
  setSeries: any;
}
