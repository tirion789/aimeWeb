import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { getAnimeFromLocalStorage } from '../../common/util';
import { IProfileSlice } from './types';

const initialState: IProfileSlice = {
  items: getAnimeFromLocalStorage(),
};

const profileSlice = createSlice({
  name: 'filterSlice',
  initialState,
  reducers: {
    setItems(state, action) {
      state.items.push(action.payload);
    },

    deleteAnimes(state, action: PayloadAction<string>) {
      state.items = state.items.filter((obj) => obj.animeTitle !== action.payload);
    },
  },
});

export const { setItems, deleteAnimes } = profileSlice.actions;

export default profileSlice.reducer;
