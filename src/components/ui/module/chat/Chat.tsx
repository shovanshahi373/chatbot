import { useEffect, useMemo, useState } from 'react';
import { useParams } from 'react-router-dom';

import { Loader, Avatar, Drawer } from '@components/ui/shared';

import { ChatBot } from '@/constants/images';

import { MenuIcon, VDotsIcon } from '@icons/index';

import { useChatContext, useAuthContext, useCommonContext } from '@/hooks';
import ChatBubble from './ChatBubble';
import Publisher from './Publisher';

import { dateHelper } from '@/utils';
import { Conversations } from '../conversations';

const Chat = () => {
  const { isLandscape } = useCommonContext();
  const [showDrawer, setShowDrawer] = useState(false);
  const { id: conversationId = null } = useParams<{ id: string }>();
  const { auth } = useAuthContext();
  const {
    loadingMessages,
    messages,
    postingMessage,
    getMessages,
    conversations,
  } = useChatContext();

  useEffect(() => {
    if (conversationId) getMessages(conversationId);
  }, [conversationId]);

  const conversationDate = useMemo(() => {
    if (!conversationId) return null;
    const conversationDetails =
      conversations.find(
        conversation => conversation.id.toString() === conversationId,
      ) || null;
    if (conversationDetails) {
      const date = new Date(conversationDetails.created_at);
      return dateHelper.formateDate(date);
    }
    return null;
  }, [conversationId, conversations]);

  if (!conversationId) return <p>click on a conversation to begin chat</p>;
  return (
    <>
      <section className="flex flex-col flex-1 h-contentHeight overflow-x-hidden overflow-y-auto">
        <div className="shadow rounded-md overflow-hidden flex-1 border-l-alpha-grey border-l-2 border-r-2 border-r-alpha-grey">
          {/* display messages */}
          <div
            ref={node => {
              if (!node) return;
              node.scrollTo({ top: node.scrollHeight });
            }}
            className="flex-1 relative h-chatHeight drop-shadow-sm overflow-x-hidden overflow-y-auto"
          >
            <div className="sticky top-0 flex justify-between items-center shadow-sm bg-secondary">
              <div className="flex gap-2 flex-1 py-1.5 px-2 rounded-sm items-center text-white">
                <div>
                  <Avatar url={ChatBot} />
                </div>
                <span>ChatBot</span>
              </div>
              {!isLandscape && (
                <span
                  title={'open menu'}
                  className="text-white inline-block px-2"
                  onClick={() => setShowDrawer(prev => !prev)}
                >
                  <MenuIcon />
                </span>
              )}
            </div>
            {loadingMessages ? (
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                <Loader />
              </div>
            ) : (
              <>
                {conversationDate && (
                  <div className="text-center py-6">{conversationDate}</div>
                )}
                {messages.length ? (
                  messages.map(message => {
                    return (
                      <ChatBubble
                        key={message.id}
                        message={message.content}
                        isMe={message.user_id === auth?.id}
                      />
                    );
                  })
                ) : (
                  <ChatBubble
                    message="How can I help you today?"
                    isMe={false}
                  />
                )}
                {postingMessage ? (
                  <ChatBubble
                    isMe={false}
                    message={
                      <span className="text-secondary animate-ping">
                        <VDotsIcon />
                      </span>
                    }
                  />
                ) : null}
              </>
            )}
          </div>
        </div>
        {/* post message */}
        <div className="py-1">
          <Publisher key={conversationId} conversationId={conversationId} />
        </div>
      </section>
      {!isLandscape ? (
        <Drawer show={showDrawer} handleClose={() => setShowDrawer(false)}>
          <Conversations />
        </Drawer>
      ) : null}
    </>
  );
};

export default Chat;
