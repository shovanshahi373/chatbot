export const restrictions = {
  UNAUTHORIZED: 'Unauthorized, token not found or token is expired!',
  RATE_LIMIT_EXCEED: 'Rate Limited. Too many requests.',
  NOT_FOUND: 'Not Found. The requested resource does not exist.',
  ACCESS_DENIED:
    'Access denied. Additional privileges are needed access the requested resource.',
  SERVER_ERROR:
    'Unexpected server error has occured. Please check again later!',
  CLIENT_ERROR: 'Input Error. Check the request payload for issues.',
};
