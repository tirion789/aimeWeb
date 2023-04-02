import { RootState } from '../store';
export const userSelector = (state: RootState) => state.user;

export const errorMessageLoginSelector = (state: RootState) => state.user.statusLogin;

export const errorMessageReisterSelector = (state: RootState) => state.user.statusRegister;
