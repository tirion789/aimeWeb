import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { getAuthentication, getRegister } from './asyncAction';
import { IUser, StatusLogin, StatusRegister } from './types';

const initialState: IUser = {
  email: null,
  token: null,
  id: null,
  nickName: null,
  statusLogin: StatusLogin.LOADING,
  statusRegister: StatusRegister.LOADING,
  error: false,
  toast: null,
};

const userSlice = createSlice({
  name: 'userSlice',
  initialState,
  reducers: {
    setUser(state, action) {
      state.email = action.payload.email;
      state.id = action.payload.id;
      state.token = action.payload.token;
      state.nickName = action.payload.nickName;
    },
    removeUser(state) {
      state.email = null;
      state.id = null;
      state.token = null;
      state.nickName = null;
    },
    setError(state, action: PayloadAction<boolean>) {
      state.error = action.payload;
    },
    setStatusMessage(state, action) {
      state.statusLogin = action.payload;
      state.statusRegister = action.payload;
    },
  },
  extraReducers: (builder) => {
    // auth
    builder.addCase(getAuthentication.pending, (state) => {
      state.statusLogin = StatusLogin.LOADING;
      state.email = null;
      state.id = null;
      state.token = null;
      state.nickName = null;
    });
    builder.addCase(getAuthentication.fulfilled, (state) => {
      state.statusLogin = StatusLogin.SUCCESS;
    });
    builder.addCase(getAuthentication.rejected, (state) => {
      state.statusLogin = StatusLogin.ERROR;
    });

    // register
    builder.addCase(getRegister.pending, (state) => {
      state.statusRegister = StatusRegister.LOADING;
    });
    builder.addCase(getRegister.fulfilled, (state) => {
      state.statusRegister = StatusRegister.SUCCESS;
    });
    builder.addCase(getRegister.rejected, (state) => {
      state.statusRegister = StatusRegister.ERROR;
    });
  },
});

export const { setUser, removeUser, setError, setStatusMessage } = userSlice.actions;

export default userSlice.reducer;
