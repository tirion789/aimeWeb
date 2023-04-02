import { createAsyncThunk } from '@reduxjs/toolkit';
import { setUser } from './userSlice';
import {
  createUserWithEmailAndPassword,
  getAuth,
  signInWithEmailAndPassword,
  updateProfile,
} from 'firebase/auth';
import { setIsOpenPopupLogin } from '../filterSlice/filterSlice';

export const getAuthentication = createAsyncThunk(
  'auth/login',
  async (params: { email: string; password: string; nickname: string }, { dispatch }) => {
    const { email, password, nickname } = params;
    const auth = getAuth();
    const { user } = await signInWithEmailAndPassword(auth, email, password);
    dispatch(
      setUser({
        email: user.email,
        id: user.uid,
        token: user.refreshToken,
        nickName: nickname,
      }),
    );
    localStorage.setItem('users', JSON.stringify(user));
    dispatch(setIsOpenPopupLogin(false));
  },
);

export const getRegister = createAsyncThunk(
  'reg/signUp',
  async (params: { email: string; password: string; nickname: string }, { dispatch }) => {
    const { email, password, nickname } = params;
    const auth = getAuth();
    const { user } = await createUserWithEmailAndPassword(auth, email, password);
    if (user) {
      updateProfile(user, {
        displayName: nickname,
      });
      dispatch(
        setUser({
          email: user.email,
          id: user.uid,
          token: user.refreshToken,
          nickName: user.displayName,
        }),
      );
    }
    localStorage.setItem('users', JSON.stringify(user));
    dispatch(setIsOpenPopupLogin(false));
  },
);
