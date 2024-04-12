interface Props {
  url?: string;
  size?: 'small' | 'medium' | 'large';
}

const sizeMap = {
  small: 'w-8',
  medium: "'w-12",
  large: 'w-16',
};

const Avatar = ({ url, size = 'medium' }: Props) => {
  const sizeClassName = sizeMap[size] || sizeMap['medium'];
  return (
    <div
      className={`rounded-full ${sizeClassName} text-black font-medium bg-light-blue overflow-hidden`}
    >
      {url ? <img src={url} /> : null}
    </div>
  );
};

export default Avatar;
