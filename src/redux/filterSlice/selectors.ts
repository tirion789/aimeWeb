import { RootState } from '../store';

export const text = (state: RootState) => state.filter.genreText;

export const popup = (state: RootState) => state.filter.popup;
