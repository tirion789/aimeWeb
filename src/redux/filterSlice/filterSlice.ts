import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IFilterSlice } from './types';

const initialState: IFilterSlice = {
  genreText: 'action',
  popup: false,
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
  },
});

export const { setGenre, setPopup } = filterSlice.actions;

export default filterSlice.reducer;
