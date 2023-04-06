export interface SelectProps {
  series: string;
  handleActiveSeriesClick: (number: number, id: string) => void;
  setSeries: any;
  handleSwapNextSeries: () => void;
  handleSwapPrevSeries: () => void;
}
