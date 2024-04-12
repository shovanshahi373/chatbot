import { Overlay } from '@components/ui/shared';

interface Props {
  conversationId: number;
  onConfirm: () => void;
  onClose: () => void;
}

const Confirmation = ({ conversationId, onConfirm, onClose }: Props) => {
  return (
    <Overlay>
      <div className="w-1/3 min-w-80 flex flex-col bg-primary rounded-3xl py-14 px-3">
        <div className="text-center m-auto">
          <p className="text-white text-2xl font-sans max-w-56">{`Are you sure you want to delete Conversation ${conversationId}`}</p>
        </div>
        <div className="mx-auto mt-8 flex justify-around items-center px-5 gap-6">
          <button
            onClick={onClose}
            className="bg-light-blue text-black px-6 py-1 rounded-2xl"
          >
            No
          </button>
          <button
            onClick={onConfirm}
            className="bg-red text-white px-6 py-1 rounded-2xl"
          >
            Yes
          </button>
        </div>
      </div>
    </Overlay>
  );
};

export default Confirmation;
