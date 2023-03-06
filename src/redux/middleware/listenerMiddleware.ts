import { createListenerMiddleware, isAnyOf } from '@reduxjs/toolkit';
import {
  deleteAnimes,
  deletePlanned,
  deleteReviewing,
  setItems,
  setPlanned,
  setReviewing,
} from '../profileSlice/profileSlice';
import type { RootState } from '../store';

export const listenerMiddleware = createListenerMiddleware();
listenerMiddleware.startListening({
  matcher: isAnyOf(
    setItems,
    setPlanned,
    setReviewing,
    deletePlanned,
    deleteAnimes,
    deleteReviewing,
  ),
  effect: (_action, listenerApi) =>
    localStorage.setItem(
      'animeList',
      JSON.stringify((listenerApi.getState() as RootState).profile),
    ),
});
