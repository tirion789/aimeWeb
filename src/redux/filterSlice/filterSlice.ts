import { createSlice } from '@reduxjs/toolkit';
import { IFilterSlice } from './types';

const initialState: IFilterSlice = {
  genre: '',
};

const filterSlice = createSlice({
  name: 'animeSlice',
  initialState,
  reducers: {
    setGenre(state, action) {
      state.genre = action.payload;
    },
  },
});

export const { setGenre } = filterSlice.actions;

export default filterSlice.reducer;
