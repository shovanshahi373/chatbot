import { ReactNode } from 'react';
import { createPortal } from 'react-dom';

interface Props {
  children: ReactNode;
}

const Overlay = ({ children }: Props) => {
  return createPortal(
    <div className="flex justify-center items-center fixed top-0 left-0 bottom-0 right-0 h-screen w-screen bg-transparent-50 z-50">
      {children}
    </div>,
    document.querySelector('#modals')!,
  );
};

export default Overlay;
