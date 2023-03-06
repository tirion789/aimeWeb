import { RootState } from '../store';
export const user = (state: RootState) => state.user;

export const errorMessage = (state: RootState) => state.user.error;
