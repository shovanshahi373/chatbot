import { AxiosError, AxiosResponse } from 'axios';
import { IData } from './types';
import { http } from '@/constants';

const mapStatusToError: Record<string, string> = {
  401: http.restrictions.UNAUTHORIZED,
  400: http.restrictions.CLIENT_ERROR,
  500: http.restrictions.SERVER_ERROR,
  403: http.restrictions.ACCESS_DENIED,
  429: http.restrictions.RATE_LIMIT_EXCEED,
  404: http.restrictions.NOT_FOUND,
};

export const handleResponse = <T>(response: AxiosResponse<T>): IData<T> => {
  const result: IData<T> = {
    data: response.data,
    success: true,
    message: 'Success!',
  };
  return result;
};

export const handleError = (err: AxiosError): IData<null> => {
  const status = err.status || err.response?.status || 500;
  const errMessage = mapStatusToError[status] || "Something went wrong!";
  return {
    data: null,
    success: false,
    message: errMessage,
  };
};
