import { useRef } from 'react';
import { useParams } from 'react-router-dom';

import { AddIcon } from '@icons/index';

import { Loader } from '@components/ui/shared';

import { useChatContext } from '@/hooks';

import Conversation from './Conversation';
import { IConversation } from '@/services/api/types';

const Conversations = () => {
  const {
    conversations,
    loadingConversations,
    createConversation,
    canCreateConversation,
  } = useChatContext();

  const { id: conversationId = null } = useParams<{ id: string }>();

  const containerRef = useRef<HTMLElement>(null);

  const handleCreateConversation = () => {
    if (!canCreateConversation) return;
    containerRef.current?.scroll({ top: 0, behavior: 'smooth' });
    createConversation();
  };

  return (
    <section
      ref={containerRef}
      className="flex flex-col w-full gap-1 shadow h-contentHeight overflow-x-hidden overflow-y-auto"
    >
      <div className="sticky top-0 z-10 bg-secondary p-4 rounded-sm text-white rounded-s flex justify-between items-center">
        <span>Conversations</span>
        <span
          title={'add conversation'}
          className="cursor-pointer"
          onClick={handleCreateConversation}
        >
          {canCreateConversation ? <AddIcon /> : null}
        </span>
      </div>
      <div className="flex relative flex-col flex-1 gap-1 bg-off-white drop-shadow-sm">
        {!canCreateConversation && (
          <div className="relative pointer-events-none select-none">
            <Conversation active={false} conversation={{} as IConversation} />
            <div className="flex justify-center items-center absolute bottom-0 right-0 top-0 left-0 bg-bg-dark z-50">
              <Loader size="small" />
            </div>
          </div>
        )}
        {loadingConversations ? (
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
            <Loader />
          </div>
        ) : conversations.length ? (
          conversations.map(conversation => {
            return (
              <Conversation
                key={conversation.id}
                active={!!conversationId && conversation.id === +conversationId}
                conversation={conversation}
              />
            );
          })
        ) : (
          <div className="w-1/2 text-center m-auto text-text-light">
            <span>Create a new conversation</span>
            <br />
            <span>by clicking the + icon above.</span>
          </div>
        )}
      </div>
    </section>
  );
};

export default Conversations;
