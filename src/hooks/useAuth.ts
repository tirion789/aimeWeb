import { getAuth, User } from 'firebase/auth';
import { useEffect, useState } from 'react';
import { userSelector } from '../redux/userSlice/selectors';
import { useAppSelector } from '../redux/hooks';

export const useAuth = () => {
  const [userData, setUserData] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const { email, refreshToken, uid, displayName } = useAppSelector(userSelector);

  useEffect(() => {
    const auth = getAuth();
    auth.onAuthStateChanged((user) => {
      setUserData(user);
      setIsLoading(false);
    });
  }, []);
  return {
    email,
    uid,
    displayName,
    refreshToken,
    isAuth: Boolean(userData),
    isLoading,
  };
};
