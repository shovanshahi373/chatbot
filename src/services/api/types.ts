export interface IConversation {
  id: number;
  user_id: number;
  label: string;
  created_at: string;
}

export interface IConversationMessage {
  id: number;
  conversation_id: number;
  content: string;
  user_id: number;
  created_at: string;
}

export interface ChatMessageBody {
  conversation_id: string;
  message: string;
}

export interface Credentials {
  email: string;
  password: string;
}

export interface ILogin extends Credentials {}

export interface IAuth {
  authToken: string;
}

export interface ISignUp extends Credentials {
  name: string;
}

export interface IResponseAuthenticate {
  id: number;
  created_at: string;
  name: string;
  email: string;
}
