const AUTH_KEY = 'auth-token';

export const getAuth = () => {
  const auth = localStorage.getItem(AUTH_KEY);
  if (!auth) return null;
  return JSON.parse(auth);
};

export const removeAuth = () => {
  localStorage.removeItem(AUTH_KEY);
};
