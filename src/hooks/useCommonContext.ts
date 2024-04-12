import { useContext } from 'react';
import { CommonContext } from '@/components/contexts';

export const useCommonContext = () => {
  const context = useContext(CommonContext);
  if (!context) throw new Error('common context not found!');
  return context;
};
