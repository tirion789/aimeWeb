import { configureStore } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';
import animeSlice from './animeSlice/animeSlice';
import filterSlice from './filterSlice/filterSlice';

export const store = configureStore({
  reducer: {
    anime: animeSlice,
    filter: filterSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch;
