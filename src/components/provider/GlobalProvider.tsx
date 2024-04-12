import { ContextProvider as AuthContextProvider } from '@components/contexts/Auth';
import { ContextProvider as CommonContextProvider } from '@components/contexts/Common';
import { ContextProvider as ChatContextProvider } from '@components/contexts/Chat';

interface Props {
  children: React.ReactNode;
}

export const GlobalProvider = ({ children }: Props) => {
  return (
    <AuthContextProvider>
      <CommonContextProvider>
        <ChatContextProvider>{children}</ChatContextProvider>
      </CommonContextProvider>
    </AuthContextProvider>
  );
};
