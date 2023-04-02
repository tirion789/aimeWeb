import { getAuth, User } from 'firebase/auth';
import { useEffect, useState } from 'react';
import { userSelector } from '../redux/userSlice/selectors';
import { useAppSelector } from '../redux/hooks';

export const useAuth = () => {
  const [userData, setUserData] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const auth = getAuth();
    auth.onAuthStateChanged((user) => {
      setIsLoading(false);
      setUserData(user);
    });
  }, []);
  const { email, token, id } = useAppSelector(userSelector);
  return {
    email,
    id,
    token,
    isAuth: Boolean(userData),
    isLoading,
  };
};
