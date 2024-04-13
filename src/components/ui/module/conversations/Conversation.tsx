import { DeleteIcon } from '@/components/icons';
import Confirmation from './Confirmation';
import { IConversation } from '@/services/api/types';

import { useChatContext, useCommonContext } from '@/hooks';
import { useState } from 'react';

import { Link } from '@components/ui/shared';
interface Props {
  conversation: IConversation;
  active: boolean;
}

const Conversation = ({ conversation, active }: Props) => {
  const [showModal, setShowModal] = useState(false);
  const [isDeleting, setIsDeleting] = useState(false);
  const { isLandscape } = useCommonContext();

  const { deleteConversation } = useChatContext();

  const handleOpenModal = () => {
    if (isDeleting) return;
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const handleDelete = async (id: number) => {
    setIsDeleting(true);
    setShowModal(false);
    try {
      await deleteConversation(id);
    } catch (error) {
      setIsDeleting(false);
    }
  };

  return (
    <>
      <div
        className={`flex gap-3 hover:border-primary border-transparent-0 border-2 cursor-pointer justify-between items-center p-4 rounded-sm ${active ? 'bg-primary text-white' : isLandscape ? 'bg-light-blue' : 'bg-bg-dark'}`}
      >
        <span className={`truncate ${active ? 'pointer-events-none' : ''}`}>
          <Link to={`/conversations/${conversation.id}`} color="black">
            {conversation.label}
          </Link>
        </span>
        <span
          className={`${active ? 'text-white' : 'text-black'}`}
          onClick={handleOpenModal}
          title={'delete conversation'}
        >
          {!isDeleting && <DeleteIcon color="currentColor" />}
        </span>
      </div>
      {showModal && (
        <Confirmation
          conversationId={conversation.id}
          onClose={handleCloseModal}
          onConfirm={() => handleDelete(conversation.id)}
        />
      )}
    </>
  );
};

export default Conversation;
