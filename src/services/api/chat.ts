import { API } from '@/clients/http';
import {
  IConversationMessage as ChatMessageBodyResponse,
  ChatMessageBody,
} from './types';

const api = API('/chat');

export const sendMessage = async (params: ChatMessageBody) => {
  return api.create<ChatMessageBody, ChatMessageBodyResponse[]>(params);
};
