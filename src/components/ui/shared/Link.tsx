import { ReactNode } from 'react';

interface Props {
  to: string;
  children: ReactNode;
}

const Link = ({ children, to }: Props) => {
  return (
    <a href={to} className="text-secondary">
      {children}
    </a>
  );
};

export default Link;
