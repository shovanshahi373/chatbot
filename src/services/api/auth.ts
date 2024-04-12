import { API } from '@/clients/http';

import { IAuth, ILogin, ISignUp, IResponseAuthenticate } from './types';

export const login = async (params: ILogin) => {
  const { create } = API('/auth/login');
  return create<ILogin, IAuth>(params);
};

export const signup = async (params: ISignUp) => {
  const { create } = API('/auth/signup');
  return create<ISignUp, IAuth>(params);
};

export const checkAuthentication = async () => {
  const { getAll } = API('/auth/me');
  return getAll<IResponseAuthenticate>();
};
