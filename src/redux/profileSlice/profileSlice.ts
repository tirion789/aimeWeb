import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import {
  getDeletedCurrentAnimeFromProfile,
  getPushCurrentlyObjectInArray,
} from '../../common/util';
import { CurrentSeries, ProfileAnime, ProfileSlice, ListNames } from './types';

export const initialState: ProfileSlice = {
  favorites: [],
  planned: [],
  reviewing: [],
  activeButton: ListNames.FAVORITES,
};

const profileSlice = createSlice({
  name: 'profileSlice',
  initialState,
  reducers: {
    setItems(state, action: PayloadAction<ProfileAnime>) {
      const newAnimeCollection = getPushCurrentlyObjectInArray(
        state.favorites,
        state.planned,
        state.reviewing,
        action.payload,
      );
      state.favorites = newAnimeCollection.mainArray;
      state.planned = newAnimeCollection.firstArray;
      state.reviewing = newAnimeCollection.secondArray;
    },
    setReviewing(state, action: PayloadAction<ProfileAnime>) {
      const newAnimeCollection = getPushCurrentlyObjectInArray(
        state.reviewing,
        state.planned,
        state.favorites,
        action.payload,
      );
      state.reviewing = newAnimeCollection.mainArray;
      state.planned = newAnimeCollection.firstArray;
      state.favorites = newAnimeCollection.secondArray;
    },
    setPlanned(state, action: PayloadAction<ProfileAnime>) {
      const newAnimeCollection = getPushCurrentlyObjectInArray(
        state.planned,
        state.favorites,
        state.reviewing,
        action.payload,
      );
      state.planned = newAnimeCollection.mainArray;
      state.favorites = newAnimeCollection.firstArray;
      state.reviewing = newAnimeCollection.secondArray;
    },
    setCurrentSeries(state, action: PayloadAction<CurrentSeries>) {
      const { title, series } = action.payload;
      const currentList = state.activeButton;
      if (currentList) {
        const currentAnime = state[currentList].find((item) => item.title.romaji === title);
        state[currentList] = state[currentList].map((item) =>
          item === currentAnime ? { ...currentAnime, currentAnimeSeries: series } : item,
        );
      }
    },
    setActiveButton(state, action: PayloadAction<ListNames>) {
      state.activeButton = action.payload;
    },
    deleteReviewing(state, action: PayloadAction<string>) {
      state.reviewing = getDeletedCurrentAnimeFromProfile(state.reviewing, action.payload);
    },
    deleteAnimes(state, action: PayloadAction<string>) {
      state.favorites = getDeletedCurrentAnimeFromProfile(state.favorites, action.payload);
    },
    deletePlanned(state, action: PayloadAction<string>) {
      state.planned = getDeletedCurrentAnimeFromProfile(state.planned, action.payload);
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
