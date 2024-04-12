import React from 'react';

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  shape?: 'rounded' | 'bordered';
  accent?: 'secondary' | 'primary' | 'red' | 'light-blue';
}

const mapColorToAccent = {
  secondary: 'white',
  primary: 'white',
  red: 'white',
  'light-blue': 'black',
};

const Button = ({
  children,
  accent = 'secondary',
  shape = 'bordered',
  ...rest
}: Props) => {
  const color = mapColorToAccent[accent];
  return (
    <button
      {...rest}
      className={`${shape === 'rounded' ? 'rounded-2xl' : 'rounded'} text-${color} w-full bg-${accent} ${rest.disabled ? 'disabled:cursor-default disabled:opacity-50' : ''} text-xl py-2 px-5 outline-none hover:opacity-90 cursor-pointer`}
    >
      {children}
    </button>
  );
};

export default Button;
