import { ReactNode } from 'react';
import { Link } from 'react-router-dom';
interface Props {
  to: string;
  children: ReactNode;
  color?: 'secondary' | 'primary' | 'red' | 'black';
}

const LinkComponent = ({ children, to, color = 'secondary' }: Props) => {
  return (
    <Link to={to}>
      <span className={`text-${color}`}>{children}</span>
    </Link>
  );
};

export default LinkComponent;
