import { configureStore } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';
import animeSlice from './animeSlice/animeSlice';

export const store = configureStore({
  reducer: {
    anime: animeSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch;
