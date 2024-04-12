import { createContext, ReactNode, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { authAPI } from '@/services/api';
import { ILogin, ISignUp } from '@/services/api/types';
import { IResponseAuthenticate } from '@/services/api/types';

import { useStorage } from '@/hooks';

import { IAuthContext as IContext } from './types';

export const AuthContext = createContext({} as IContext);

interface Props {
  children: ReactNode;
}

export const ContextProvider = ({ children }: Props) => {
  const [isLoggingIn, setIsLoggingIn] = useState(false);
  const navigate = useNavigate();
  const {
    currentValue: token,
    clearValue,
    setValue: setToken,
  } = useStorage<string>('auth-token', null);
  const [auth, setAuth] = useState<null | IResponseAuthenticate>();

  const login = async (credentials: ILogin) => {
    setIsLoggingIn(true);
    const { data, success, message } = await authAPI.login(credentials);
    if (success) setToken(data?.authToken!);
    setIsLoggingIn(false);
    return message;
  };

  const register = async (params: ISignUp) => {
    const { data, success, message } = await authAPI.signup(params);
    if (success) setToken(data?.authToken!);
    return message;
  };

  const logout = () => {
    clearValue();
    navigate('/login', { replace: true });
  };

  const checkAuthentication = async () => {
    const { success, message, data } = await authAPI.checkAuthentication();
    if (success) {
      setAuth(data);
    } else {
      setAuth(null);
    }
    return message;
  };

  return (
    <AuthContext.Provider
      value={{
        auth,
        checkAuthentication,
        token,
        login,
        logout,
        isLoggingIn,
        register,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
