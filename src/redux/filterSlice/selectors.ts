import { RootState } from '../store';

export const text = (state: RootState) => state.filter.genreText;

export const popup = (state: RootState) => state.filter.popup;

export const series = (state: RootState) => state.filter.series;

export const letter = (state: RootState) => state.filter.letter;
