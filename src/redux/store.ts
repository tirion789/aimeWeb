import { configureStore } from '@reduxjs/toolkit';
import filterSlice from './filterSlice/filterSlice';
import profileSlice, { initialState } from './profileSlice/profileSlice';
import userSlice from './userSlice/userSlice';
import { listenerMiddleware } from './middleware/listenerMiddleware';
import { animeApi } from './api/query';
import { setupListeners } from '@reduxjs/toolkit/dist/query';

const loadFromLocalStorage = JSON.parse(localStorage.getItem('animeList') || 'null');

export const store = configureStore({
  reducer: {
    filter: filterSlice,
    profile: profileSlice,
    user: userSlice,
    [animeApi.reducerPath]: animeApi.reducer,
  },
  preloadedState: {
    profile: loadFromLocalStorage === null ? initialState : loadFromLocalStorage,
  },
  // middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(animeApi.middleware),
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(listenerMiddleware.middleware).concat(animeApi.middleware),
});

setupListeners(store.dispatch);

export type RootState = ReturnType<typeof store.getState>;
