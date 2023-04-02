import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { FilterSlice } from './types';

const initialState: FilterSlice = {
  genreText: 'action',
  popup: false,
  series: '1',
  letter: '',
  isGenrePopupOpen: false,
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
    setIsGenrePopupOpen(state, action: PayloadAction<boolean>) {
      state.isGenrePopupOpen = action.payload;
    },
  },
});

export const { setGenre, setIsOpenPopupLogin, setSeries, setLetter, setIsGenrePopupOpen } =
  filterSlice.actions;

export default filterSlice.reducer;
