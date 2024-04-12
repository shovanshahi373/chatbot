import { httpClient } from './http';
import { handleResponse, handleError } from './handlers';

const getOne =
  (url: string) =>
  <T>(id: string) =>
    httpClient
      .get(`${url}/${id}`)
      .then(res => handleResponse<T>(res))
      .catch(handleError);
const getAll =
  (url: string) =>
  <T>() =>
    httpClient
      .get(url)
      .then(res => handleResponse<T>(res))
      .catch(handleError);
const create =
  (url: string) =>
  <T, K = any>(data: T) =>
    httpClient
      .post(url, data)
      .then(res => handleResponse<K>(res))
      .catch(handleError);
const deleteOne =
  (url: string) =>
  <T>(id: string) =>
    httpClient
      .delete(`${url}/${id}`)
      .then(res => handleResponse<T>(res))
      .catch(handleError);

export default (url: string) => {
  return {
    getOne: getOne(url),
    getAll: getAll(url),
    create: create(url),
    deleteOne: deleteOne(url),
  };
};
