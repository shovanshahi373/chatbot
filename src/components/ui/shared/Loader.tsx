import { LoaderIcon } from '@icons/index';

interface Props {
  size?: 'small' | 'medium' | 'large';
}

const sizeMap = {
  small: 20,
  medium: 30,
  large: 40,
};

const Loader = ({ size = 'medium' }: Props) => {
  const length = (sizeMap[size] || sizeMap['medium']) * 1.5;
  return (
    <div className="flex justify-center items-center">
      <LoaderIcon
        color="var(--purple)"
        height={length}
        width={length}
        className="animate-spin"
      />
    </div>
  );
};

export default Loader;
