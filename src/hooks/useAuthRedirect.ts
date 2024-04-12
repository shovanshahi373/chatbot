import { useNavigate, useLocation } from 'react-router-dom';
import { useAuthContext } from './useAuthContext';
import { useEffect, useState } from 'react';

export const useAuthRedirect = (route?: string) => {
  const [loading, setLoading] = useState(true);
  const { auth, token, checkAuthentication } = useAuthContext();
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    checkAuthentication();
  }, []);

  useEffect(() => {
    if (token && auth?.id) {
      navigate(route || location.pathname, { replace: true });
    } else {
      if (auth === null) {
        setLoading(false);
      }
    }
  }, [auth, token]);

  return { loading };
};
