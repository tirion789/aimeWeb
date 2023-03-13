import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IFilterSlice } from './types';

const initialState: IFilterSlice = {
  genreText: 'action',
  popup: false,
  series: '1',
  letter: '',
};

const filterSlice = createSlice({
  name: 'filterSlice',
  initialState,
  reducers: {
    setGenre(state, action: PayloadAction<string>) {
      state.genreText = action.payload;
    },
    setPopup(state, action: PayloadAction<boolean>) {
      state.popup = action.payload;
    },
    setSeries(state, action: PayloadAction<string>) {
      state.series = action.payload;
    },
    setLetter(state, action: PayloadAction<string>) {
      state.letter = action.payload;
    },
  },
});

export const { setGenre, setPopup, setSeries, setLetter } = filterSlice.actions;

export default filterSlice.reducer;
