import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { animeItem } from '../animeSlice/types';
import { IProfileSlice } from './types';

const initialState: IProfileSlice = {
  items: [],
  planned: [],
  reviewing: [],
};

const profileSlice = createSlice({
  name: 'filterSlice',
  initialState,
  reducers: {
    setItems(state, action: PayloadAction<animeItem>) {
      state.items.push(action.payload);
      state.planned = state.planned.filter((obj) => obj.animeTitle !== action.payload.animeTitle);
      state.reviewing = state.reviewing.filter(
        (obj) => obj.animeTitle !== action.payload.animeTitle,
      );
    },
    setReviewing(state, action: PayloadAction<animeItem>) {
      state.reviewing.push(action.payload);
      state.planned = state.planned.filter((obj) => obj.animeTitle !== action.payload.animeTitle);
      state.items = state.items.filter((obj) => obj.animeTitle !== action.payload.animeTitle);
    },
    setPlanned(state, action: PayloadAction<animeItem>) {
      state.planned.push(action.payload);
      state.items = state.items.filter((obj) => obj.animeTitle !== action.payload.animeTitle);
      state.reviewing = state.reviewing.filter(
        (obj) => obj.animeTitle !== action.payload.animeTitle,
      );
    },
    deleteReviewing(state, action: PayloadAction<string>) {
      state.reviewing = state.reviewing.filter((obj) => obj.animeTitle !== action.payload);
    },
    deleteAnimes(state, action: PayloadAction<string>) {
      state.items = state.items.filter((obj) => obj.animeTitle !== action.payload);
    },
    deletePlanned(state, action: PayloadAction<string>) {
      state.planned = state.planned.filter((obj) => obj.animeTitle !== action.payload);
    },
  },
});

export const { setItems, deleteAnimes, setPlanned, deletePlanned, setReviewing, deleteReviewing } =
  profileSlice.actions;

export default profileSlice.reducer;
