import { createAsyncThunk } from '@reduxjs/toolkit';
import { setUser } from './userSlice';
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import { setPopup } from '../filterSlice/filterSlice';

export const getAuthentication = createAsyncThunk(
  'auth/login',
  async (params: { email: string; password: string }, { dispatch }) => {
    const { email, password } = params;
    const auth = getAuth();
    const { user } = await signInWithEmailAndPassword(auth, email, password);
    dispatch(
      setUser({
        email: user.email,
        id: user.uid,
        token: user.refreshToken,
      }),
    );
    localStorage.setItem('users', JSON.stringify(user));
    dispatch(setPopup(false));
  },
);

export const getRegister = createAsyncThunk(
  'reg/signUp',
  async (params: { email: string; password: string }, { dispatch }) => {
    const { email, password } = params;
    const auth = getAuth();
    const { user } = await createUserWithEmailAndPassword(auth, email, password);
    dispatch(
      setUser({
        email: user.email,
        id: user.uid,
        token: user.refreshToken,
      }),
    );
    localStorage.setItem('users', JSON.stringify(user));
    dispatch(setPopup(false));
  },
);
