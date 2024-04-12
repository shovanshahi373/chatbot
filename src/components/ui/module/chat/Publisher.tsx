import { useEffect, useState } from 'react';

import { SendIcon } from '@icons/index';

import { useChatContext, useStorage, useDebounce } from '@/hooks';

interface Props {
  conversationId: string;
}

type IMessageDraft = Record<string, string>;

const KEY = 'chatbot-msg-drafts';

const Publisher = ({ conversationId }: Props) => {
  const { currentValue: drafts, setValue: setDrafts } =
    useStorage<IMessageDraft>(KEY, {} as IMessageDraft);
  const { postMessage, postingMessage } = useChatContext();

  const [text, setText] = useState(() => drafts?.[conversationId] || '');

  const [updateDraft, cancel] = useDebounce((message: string) => {
    setDrafts(prev => ({
      ...prev,
      [conversationId]: message,
    }));
  });

  useEffect(() => {
    updateDraft(text);
    return cancel;
  }, [text]);

  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      handlePostMessage();
      e.currentTarget.focus();
    }
  };

  const handlePostMessage = async () => {
    if (!text || postingMessage) return;
    const message = text;
    setText('');
    await postMessage({ message, conversation_id: conversationId });
  };
  return (
    <div className="flex justify-center gap-4 items-center rounded-full shadow px-5 py-2">
      <div className="flex flex-1">
        <textarea
          value={text}
          onChange={e => setText(e.target.value)}
          placeholder="Reply to Chatbot"
          className="outline-none bg-opacity-0 w-full resize-none"
          rows={1}
          onKeyDown={handleKeyDown}
        />
      </div>
      <span
        onClick={handlePostMessage}
        className={`cursor-pointer ${text.length && !postingMessage ? '' : 'opacity-30'} rounded-full inline-block h-10 w-10 p-2 bg-primary`}
        title="send message"
      >
        <SendIcon color="var(--white)" />
      </span>
    </div>
  );
};

export default Publisher;
