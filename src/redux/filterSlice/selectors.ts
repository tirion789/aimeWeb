import { RootState } from '../store';

export const genreTextSelector = (state: RootState) => state.filter.genreText;

export const authModalSelector = (state: RootState) => state.filter.popup;

export const series = (state: RootState) => state.filter.series;

export const letterSelector = (state: RootState) => state.filter.letter;

export const isGenrePopupOpenSelector = (state: RootState) => state.filter.isGenrePopupOpen;
