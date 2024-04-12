import { API } from '@/clients/http';

import { IConversation, IConversationMessage } from './types';

const client = API('/conversation');

export const getConversations = async () => {
  return await client.getAll<IConversation[]>();
};

export const getConversationMessages = async (conversationId: string) => {
  return client.getOne<IConversationMessage[]>(conversationId);
};

export const deleteConversation = async (conversationId: string) => {
  return client.deleteOne<{}>(conversationId);
};

export const createConversation = async () => {
  return client.create(undefined);
};
