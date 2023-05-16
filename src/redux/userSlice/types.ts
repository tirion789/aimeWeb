export enum StatusLogin {
  LOADING = 'loading',
  SUCCESS = 'success',
  ERROR = 'error',
}

export enum StatusRegister {
  LOADING = 'loading',
  SUCCESS = 'success',
  ERROR = 'error',
}

export interface User {
  email: null;
  refreshToken: null;
  uid: null;
  displayName: null;
  statusLogin: StatusLogin;
  statusRegister: StatusRegister;
  error: boolean;
}
