import { configureStore } from '@reduxjs/toolkit';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import animeSlice from './animeSlice/animeSlice';
import filterSlice from './filterSlice/filterSlice';
import profileSlice from './profileSlice/profileSlice';
import userSlice from './userSlice/userSlice';
import { listenerMiddleware } from './middleware/listenerMiddleware';

const loadFromLocalStorage = JSON.parse(localStorage.getItem('animeList') || 'null');

export const store = configureStore({
  reducer: {
    anime: animeSlice,
    filter: filterSlice,
    profile: profileSlice,
    user: userSlice,
  },
  preloadedState: {
    profile:
      loadFromLocalStorage === null
        ? {
            items: [],
            planned: [],
            reviewing: [],
          }
        : loadFromLocalStorage,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(listenerMiddleware.middleware),
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
