import { Avatar } from '@components/ui/shared';

import { ChatBot, User } from '@/constants/images';

interface Props {
  message: React.ReactNode;
  isMe: boolean;
}

const ChatBubble = ({ message, isMe }: Props) => {
  return (
    <div
      className={`flex gap-2 ${isMe ? 'flex-row-reverse' : 'justify-start flex-row'} my-5 mx-1`}
    >
      <div>
        <Avatar url={isMe ? User : ChatBot} />
      </div>
      <div
        className={`flex place-items-center max-w-96 ${isMe ? 'text-white bg-primary text-right' : 'text-left text-secondary bg-light-blue'} px-5 py-2 rounded-2xl`}
      >
        {message}
      </div>
    </div>
  );
};

export default ChatBubble;
