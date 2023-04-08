import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { FilterSlice } from './types';

const initialState: FilterSlice = {
  genreText: 'Any',
  popup: false,
  series: '1',
  letter: '',
  season: 'Any',
  format: 'Any',
  type: 'ANIME',
  currentPaginationButtons: 1,
};

const filterSlice = createSlice({
  name: 'filterSlice',
  initialState,
  reducers: {
    setGenre(state, action: PayloadAction<string>) {
      state.genreText = action.payload;
    },
    setIsOpenPopupLogin(state, action: PayloadAction<boolean>) {
      state.popup = action.payload;
    },
    setSeries(state, action: PayloadAction<string>) {
      state.series = action.payload;
    },
    setLetter(state, action: PayloadAction<string>) {
      state.letter = action.payload;
    },
    setSeason(state, action: PayloadAction<string>) {
      state.season = action.payload;
    },
    setFormat(state, action: PayloadAction<string>) {
      state.format = action.payload;
    },
    setType(state, action: PayloadAction<string>) {
      state.type = action.payload;
    },
    setCurrentPainationButton(state, action: PayloadAction<number>) {
      state.currentPaginationButtons = action.payload;
    },
  },
});

export const {
  setGenre,
  setIsOpenPopupLogin,
  setSeries,
  setLetter,
  setSeason,
  setFormat,
  setType,
  setCurrentPainationButton,
} = filterSlice.actions;

export default filterSlice.reducer;
