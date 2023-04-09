import { createSlice } from '@reduxjs/toolkit';
import { fetchNagatoro } from './asyncAction';
import { AnimeSliceState, StatusServer } from './types';

const initialState: AnimeSliceState = {
  status: StatusServer.LOADING,
  nagatoro: null,
};

const animeSlice = createSlice({
  name: 'animeSlice',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    // nagatoro

    builder.addCase(fetchNagatoro.pending, (state) => {
      state.status = StatusServer.LOADING;
      state.nagatoro = null;
    });
    builder.addCase(fetchNagatoro.fulfilled, (state, action) => {
      state.nagatoro = action.payload;
      state.status = StatusServer.SUCCESS;
    });
    builder.addCase(fetchNagatoro.rejected, (state) => {
      state.status = StatusServer.ERROR;
      state.nagatoro = null;
    });
  },
});

export const {} = animeSlice.actions;

export default animeSlice.reducer;
