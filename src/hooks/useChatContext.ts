import { ChatContext } from '@/components/contexts';
import { useContext } from 'react';

export const useChatContext = () => {
  const context = useContext(ChatContext);
  if (!context) throw new Error('chat context not found!');
  return context;
};
