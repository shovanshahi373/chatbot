import { createContext, ReactNode, useState } from 'react';

import { chatAPI, conversationAPI } from '@/services/api';
import {
  IConversation,
  IConversationMessage,
  ChatMessageBody,
} from '@/services/api/types';

import { IChatContext as IContext } from './types';

export const ChatContext = createContext({} as IContext);

import { useAuthContext } from '@/hooks';

interface Props {
  children: ReactNode;
}

export const ContextProvider = ({ children }: Props) => {
  const [loadingConversations, setLoadingConversations] = useState(false);
  const [loadingMessages, setLoadingMessages] = useState(false);
  const [messages, setMessages] = useState<IConversationMessage[]>([]);
  const [conversations, setConversations] = useState<IConversation[]>([]);
  const [postingMessage, setPostingMessage] = useState(false);

  const [messageGroups, setMessageGroups] = useState<
    Record<string, IConversationMessage[]>
  >({});

  const [canCreateConversation, setCanCreateConversation] = useState(true);

  const { auth } = useAuthContext();

  const createConversation = async () => {
    setCanCreateConversation(false);
    const { data, success, message } =
      await conversationAPI.createConversation();
    if (success) setConversations(prev => [data, ...prev]);
    setCanCreateConversation(true);
    return message;
  };

  const loadConversations = async () => {
    setLoadingConversations(true);
    const { data, success, message } = await conversationAPI.getConversations();
    if (success) setConversations([].concat(data as []));
    setLoadingConversations(false);
    return message;
  };

  const getMessages = async (conversationId: string) => {
    if (Array.isArray(messageGroups[conversationId])) {
      setMessages(messageGroups[conversationId]);
      return '';
    }
    setLoadingMessages(true);
    const { data, success, message } =
      await conversationAPI.getConversationMessages(conversationId);
    if (success) {
      const currentMessages = messages;
      setMessageGroups(prev => ({
        ...prev,
        [conversationId]: currentMessages,
      }));
      setMessages(data!);
    }
    setLoadingMessages(false);
    return message;
  };

  const deleteConversation = async (conversationId: number) => {
    const { success, message } = await conversationAPI.deleteConversation(
      conversationId.toString(),
    );
    if (success) {
      setConversations(prev =>
        prev.filter(conversation => conversation.id !== conversationId),
      );
      setMessages([]);
    }
    return message;
  };

  const postMessage = async (params: ChatMessageBody) => {
    setPostingMessage(true);
    const message = params.message;
    const date = Date.now();
    setMessages(prev => [
      ...prev,
      {
        content: message,
        conversation_id: date,
        created_at: date.toString(),
        id: date,
        user_id: auth?.id!,
      },
    ]);
    const { data, success, message: msg } = await chatAPI.sendMessage(params);
    if (success) {
      setMessages(prev => [...prev, ...data!.slice(-1)]);
    }
    setPostingMessage(false);
    return msg;
  };

  return (
    <ChatContext.Provider
      value={{
        createConversation,
        deleteConversation,
        getMessages,
        loadConversations,
        loadingConversations,
        postingMessage,
        postMessage,
        conversations,
        loadingMessages,
        messages,
        canCreateConversation,
      }}
    >
      {children}
    </ChatContext.Provider>
  );
};
