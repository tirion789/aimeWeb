export interface PaginationProps {
  handlePaginationClickNext: () => void;
  handleClickPaginationButton: (button: number) => void;
  handleClickOnFirstPage: () => void;
  handlePaginationClickPrev: () => void;
  lastIndexSlice: number;
  firestIndexSlice: number;
  handleClickOnLastPage: () => void;
  currentPaginationButton: number;
  buttonsArray: number[];
}
