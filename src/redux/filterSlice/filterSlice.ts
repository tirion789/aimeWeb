import { createSlice } from '@reduxjs/toolkit';
import { IFilterSlice } from './types';

const initialState: IFilterSlice = {
  genreText: 'action',
};

const filterSlice = createSlice({
  name: 'animeSlice',
  initialState,
  reducers: {
    setGenre(state, action) {
      state.genreText = action.payload;
    },
  },
});

export const { setGenre } = filterSlice.actions;

export default filterSlice.reducer;
