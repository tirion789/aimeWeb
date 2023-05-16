import { ChangeEvent, useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import { FORM_TYPES } from '../common/const';
import { getAuthentication, getRegister } from '../redux/userSlice/asyncAction';
import {
  errorMessageLoginSelector,
  errorMessageReisterSelector,
} from '../redux/userSlice/selectors';
import { setError, setStatusMessage, setUser } from '../redux/userSlice/userSlice';
import { useAppDispatch, useAppSelector } from '../redux/hooks';

export const useUserModal = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [formType, setFormType] = useState(FORM_TYPES.singIn);
  const [nickname, setNickname] = useState('');
  const serverStatusLogin = useAppSelector(errorMessageLoginSelector);
  const serverStatusRegister = useAppSelector(errorMessageReisterSelector);
  const dispatch = useAppDispatch();

  const handleEmailChange = (event: ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event: ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

  const handleNicknameChange = (event: ChangeEvent<HTMLInputElement>) => {
    setNickname(event.target.value);
  };

  const handleClickSubmitButton = () => {
    if (formType === FORM_TYPES.singIn) {
      dispatch(getAuthentication({ email, password }));
    } else {
      dispatch(getRegister({ nickname, email, password }));
    }
  };

  const handleClickChangeButton = () => {
    dispatch(setError(false));
    dispatch(setStatusMessage('loading'));
    if (formType === FORM_TYPES.signUp) {
      setFormType(FORM_TYPES.singIn);
    } else {
      setFormType(FORM_TYPES.signUp);
    }
  };

  useEffect(() => {
    if (serverStatusLogin === 'success') {
      toast.success('You have successfully login!');
      dispatch(setStatusMessage('loading'));
    }
    if (serverStatusLogin === 'error') {
      toast.error('It looks like something went wrong, check your data');
    }
    if (serverStatusRegister === 'success') {
      toast.success('You have successfully register!');
      dispatch(setStatusMessage('loading'));
    }
    if (serverStatusRegister === 'error') {
      toast.error('It looks like something went wrong, check your data');
    }
  }, [dispatch, serverStatusLogin, serverStatusRegister]);

  useEffect(() => {
    const loggedInUser = localStorage.getItem('users');
    if (loggedInUser) {
      const foundUser = JSON.parse(loggedInUser);
      dispatch(setUser(foundUser));
    }
  }, [dispatch]);

  return {
    email,
    password,
    nickname,
    handleEmailChange,
    handlePasswordChange,
    handleNicknameChange,
    handleClickSubmitButton,
    handleClickChangeButton,
    formType,
  };
};
