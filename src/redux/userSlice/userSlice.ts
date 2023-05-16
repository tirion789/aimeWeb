import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { getAuthentication, getRegister } from './asyncAction';
import { User, StatusLogin, StatusRegister } from './types';

const initialState: User = {
  email: null,
  refreshToken: null,
  uid: null,
  displayName: null,
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
      state.uid = action.payload.uid;
      state.refreshToken = action.payload.refreshToken;
      state.displayName = action.payload.displayName;
    },
    removeUser(state) {
      state.email = null;
      state.uid = null;
      state.refreshToken = null;
      state.displayName = null;
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
