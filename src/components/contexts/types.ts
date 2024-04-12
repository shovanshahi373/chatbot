import {
  ChatMessageBody,
  IConversation,
  IConversationMessage,
  IResponseAuthenticate,
  ILogin,
  ISignUp,
} from '@/services/api/types';

type PromiseFunc<T = void, K = void> = (params: K) => Promise<T>;

export interface IChatContext {
  createConversation: PromiseFunc<string, void>;
  loadConversations: PromiseFunc<string, void>;
  getMessages: PromiseFunc<string, string>;
  deleteConversation: PromiseFunc<string, number>;
  postMessage: PromiseFunc<string, ChatMessageBody>;

  loadingConversations: boolean;
  postingMessage: boolean;
  loadingMessages: boolean;
  canCreateConversation: boolean;

  messages: IConversationMessage[];
  conversations: IConversation[];
}

export interface ICommonContext {
  isLandscape: boolean;
}

export interface IAuthContext {
  auth: IResponseAuthenticate | null | undefined;
  checkAuthentication: PromiseFunc<string, void>;
  token: null | string;
  login: PromiseFunc<string, ILogin>;
  logout: () => void;
  isLoggingIn: boolean;
  register: PromiseFunc<string, ISignUp>;
}
