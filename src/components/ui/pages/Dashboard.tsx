import { Conversations, Chat } from '@components/ui/module';
import { Layout } from '@/components/ui/layouts';

import { useChatContext, useCommonContext } from '@/hooks';

import { useEffect } from 'react';

const Dashboard = () => {
  const { loadConversations } = useChatContext();
  const { isLandscape } = useCommonContext();

  useEffect(() => {
    loadConversations();
  }, []);

  return (
    <Layout>
      {isLandscape ? (
        <div className="w-1/4">
          <Conversations />
        </div>
      ) : null}
      <div className="relative flex-1 h-full flex justify-center items-center">
        <Chat />
      </div>
    </Layout>
  );
};

export default Dashboard;
