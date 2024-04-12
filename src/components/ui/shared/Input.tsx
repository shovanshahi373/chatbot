import React from 'react';

interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
  type?: 'text' | 'password';
  name: string;
  value: string;
  label?: string;
}

const Input = ({ type = 'text', name, label, value, ...rest }: Props) => {
  return (
    <div>
      {label && (
        <label htmlFor={name}>
          <span className="text-red">{label}</span>
        </label>
      )}
      <div className="border-alpha-grey border-2 rounded text-text p-1">
        <input
          {...rest}
          type={type}
          id={name}
          value={value}
          name={name}
          className="w-full border-0 outline-none"
        />
      </div>
    </div>
  );
};

export default Input;
