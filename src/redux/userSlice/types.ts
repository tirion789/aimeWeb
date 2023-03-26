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

export interface IUser {
  email: null;
  token: null;
  id: null;
  nickName: null;
  statusLogin: StatusLogin;
  statusRegister: StatusRegister;
  error: boolean;
  toast: any;
}
