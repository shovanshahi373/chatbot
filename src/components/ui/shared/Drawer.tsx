import { ReactNode } from 'react';

interface Props {
  children: ReactNode;
  show: boolean;
  handleClose: () => void;
}

const Drawer = ({ children, show, handleClose }: Props) => {
  if (!show) return null;
  return (
    <div className="flex absolute bg-transparent-50 top-0 left-0 w-full h-full">
      <div
        className={`w-3/4 min-w-80 transition-transform z-50 ${show ? 'translate-x-0' : '-translate-x-full'}`}
      >
        {children}
      </div>
      <div onClick={handleClose} className="h-full w-1/4" />
    </div>
  );
};

export default Drawer;
