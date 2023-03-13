import { useSelector } from 'react-redux';
import { user } from '../redux/userSlice/selectors';

export const useAuth = () => {
  const { email, token, id, nickName } = useSelector(user);

  return {
    isAuth: !!email,
    nickName,
    email,
    token,
    id,
  };
};
