import { RootState } from '../store';

export const genreTextSelector = (state: RootState) => state.filter.genreText;

export const authModalSelector = (state: RootState) => state.filter.popup;

export const series = (state: RootState) => state.filter.series;

export const letterSelector = (state: RootState) => state.filter.letter;

export const seasonSelector = (state: RootState) => state.filter.season;

export const formatSelector = (state: RootState) => state.filter.format;

export const typeSelector = (state: RootState) => state.filter.type;

export const currentPaginationButtonSelector = (state: RootState) =>
  state.filter.currentPaginationButtons;
