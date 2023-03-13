import { createSlice } from '@reduxjs/toolkit';
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
      state.error = false;
    });
    builder.addCase(getAuthentication.rejected, (state) => {
      state.statusLogin = StatusLogin.ERROR;
      state.error = true;
    });

    // register
    builder.addCase(getRegister.pending, (state) => {
      state.statusRegister = StatusRegister.LOADING;
    });
    builder.addCase(getRegister.fulfilled, (state) => {
      state.statusRegister = StatusRegister.SUCCESS;
      state.error = false;
    });
    builder.addCase(getRegister.rejected, (state) => {
      state.statusRegister = StatusRegister.ERROR;
      state.error = true;
    });
  },
});

export const { setUser, removeUser } = userSlice.actions;

export default userSlice.reducer;
