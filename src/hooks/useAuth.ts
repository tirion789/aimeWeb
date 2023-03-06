import { useSelector } from 'react-redux';
import { user } from '../redux/userSlice/selectors';

export const useAuth = () => {
  const { email, token, id } = useSelector(user);

  return {
    isAuth: !!email,
    email,
    token,
    id,
  };
};
