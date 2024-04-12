import { AuthContext } from '@/components/contexts/Auth';
import { useContext } from 'react';

export const useAuthContext = () => {
  const context = useContext(AuthContext);
  if (!context) throw new Error('auth context not found!');
  return context;
};
