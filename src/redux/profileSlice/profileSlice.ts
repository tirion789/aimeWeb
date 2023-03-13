import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ICurrentSeries, IProfileAnime, IProfileSlice, listNames } from './types';

export const initialState: IProfileSlice = {
  favorites: [],
  planned: [],
  reviewing: [],
  activeButton: null,
};

const profileSlice = createSlice({
  name: 'profileSlice',
  initialState,
  reducers: {
    setItems(state, action: PayloadAction<IProfileAnime>) {
      state.favorites.push(action.payload);
      state.planned = state.planned.filter((obj) => obj.animeTitle !== action.payload.animeTitle);
      state.reviewing = state.reviewing.filter(
        (obj) => obj.animeTitle !== action.payload.animeTitle,
      );
    },
    setReviewing(state, action: PayloadAction<IProfileAnime>) {
      state.reviewing.push(action.payload);
      state.planned = state.planned.filter((obj) => obj.animeTitle !== action.payload.animeTitle);
      state.favorites = state.favorites.filter(
        (obj) => obj.animeTitle !== action.payload.animeTitle,
      );
    },
    setPlanned(state, action: PayloadAction<IProfileAnime>) {
      state.planned.push(action.payload);
      state.favorites = state.favorites.filter(
        (obj) => obj.animeTitle !== action.payload.animeTitle,
      );
      state.reviewing = state.reviewing.filter(
        (obj) => obj.animeTitle !== action.payload.animeTitle,
      );
    },
    setCurrentSeries(state, action: PayloadAction<ICurrentSeries>) {
      const { title, series } = action.payload;
      const currentList = state.activeButton;
      if (currentList) {
        const currentAnime = state[currentList].find((item) => item.animeTitle === title);
        state[currentList] = state[currentList].map((item) =>
          item === currentAnime ? { ...currentAnime, currentAnimeSeries: series } : item,
        );
      }
    },
    setActiveButton(state, action: PayloadAction<listNames>) {
      state.activeButton = action.payload;
    },
    deleteReviewing(state, action: PayloadAction<string>) {
      state.reviewing = state.reviewing.filter((obj) => obj.animeTitle !== action.payload);
    },
    deleteAnimes(state, action: PayloadAction<string>) {
      state.favorites = state.favorites.filter((obj) => obj.animeTitle !== action.payload);
    },
    deletePlanned(state, action: PayloadAction<string>) {
      state.planned = state.planned.filter((obj) => obj.animeTitle !== action.payload);
    },
  },
});

export const {
  setItems,
  deleteAnimes,
  setPlanned,
  deletePlanned,
  setReviewing,
  deleteReviewing,
  setActiveButton,
  setCurrentSeries,
} = profileSlice.actions;

export default profileSlice.reducer;
