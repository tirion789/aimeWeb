import { ChangeEvent, useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import { FORM_TYPES } from '../common/const';
import { useAppDispatch } from '../redux/store';
import { getAuthentication, getRegister } from '../redux/userSlice/asyncAction';
import { errorMessageLogin, errorMessageReister } from '../redux/userSlice/selectors';
import { setError, setStatusMessage, setUser } from '../redux/userSlice/userSlice';

export const useUserModal = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [formType, setFormType] = useState(FORM_TYPES.singIn);
  const [nickname, setNickname] = useState('');
  const serverStatusLogin = useSelector(errorMessageLogin);
  const serverStatusRegister = useSelector(errorMessageReister);
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
      dispatch(getAuthentication({ nickname, email, password }));
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
    const loggedInUser = localStorage.getItem('users');
    if (loggedInUser) {
      const foundUser = JSON.parse(loggedInUser);
      dispatch(setUser(foundUser));
    }
    if (serverStatusLogin === 'success') {
      toast.success('You have successfully login!');
    }
    if (serverStatusLogin === 'error') {
      toast.error('It looks like something went wrong, check your data');
    }
    if (serverStatusRegister === 'success') {
      toast.success('You have successfully register!');
    }
    if (serverStatusRegister === 'error') {
      toast.error('It looks like something went wrong, check your data');
    }
  }, [dispatch, serverStatusLogin, serverStatusRegister]);

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
