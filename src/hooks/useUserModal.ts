import { ChangeEvent, useEffect, useState } from 'react';
import { FORM_TYPES } from '../common/const';
import { useAppDispatch } from '../redux/store';
import { getAuthentication, getRegister } from '../redux/userSlice/asyncAction';
import { setUser } from '../redux/userSlice/userSlice';

export const useUserModal = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [formType, setFormType] = useState(FORM_TYPES.singIn);
  const [nickname, setNickname] = useState('');
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
