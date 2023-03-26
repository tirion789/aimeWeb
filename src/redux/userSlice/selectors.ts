import { RootState } from '../store';
export const user = (state: RootState) => state.user;

export const errorMessageLogin = (state: RootState) => state.user.statusLogin;

export const errorMessageReister = (state: RootState) => state.user.statusRegister;
