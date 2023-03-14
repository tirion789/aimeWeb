import { MouseEvent } from 'react';

export interface ISelectProps {
  arraySeries: number[];
  series: string;
  onActiveSeriesClick: (event: MouseEvent<HTMLButtonElement>) => void;
}
