import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { fetchAnime, fetchAnimes } from './asyncAction';
import { animeItem, IAnimeSliceState, StatusAnime, StatusAnimes } from './types';

const initialState: IAnimeSliceState = {
  currentItem: null,
  items: [],
  status: StatusAnimes.LOADING,
  statusAnime: StatusAnime.LOADING,
};

const animeSlice = createSlice({
  name: 'animeSlice',
  initialState,
  reducers: {
    setItems(state, action: PayloadAction<animeItem[]>) {
      state.items = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchAnimes.pending, (state) => {
      state.status = StatusAnimes.LOADING;
      state.items = [];
    });
    builder.addCase(fetchAnimes.fulfilled, (state, action) => {
      state.items = action.payload;
      state.status = StatusAnimes.SUCCESS;
    });
    builder.addCase(fetchAnimes.rejected, (state) => {
      state.status = StatusAnimes.ERROR;
      state.items = [];
    });
    builder.addCase(fetchAnime.pending, (state) => {
      state.status = StatusAnimes.LOADING;
      state.currentItem = null;
    });
    builder.addCase(fetchAnime.fulfilled, (state, action) => {
      state.currentItem = action.payload;
      state.status = StatusAnimes.SUCCESS;
    });
    builder.addCase(fetchAnime.rejected, (state) => {
      state.status = StatusAnimes.ERROR;
      state.currentItem = null;
    });
  },
});

export const {} = animeSlice.actions;

export default animeSlice.reducer;
