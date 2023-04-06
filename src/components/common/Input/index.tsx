import React, { ChangeEvent } from 'react';

type InputProps = {
  name?: string;
  value: string;
  changeHandler: (event: ChangeEvent<HTMLInputElement>) => void;
  type?: string;
  className?: string;
  placeholder: string;
};

const Input = ({ name, value, changeHandler, type, className, placeholder }: InputProps) => {
  return (
    <input
      name={name}
      type={type}
      value={value}
      onChange={changeHandler}
      className={className}
      placeholder={placeholder}
    />
  );
};

export default Input;
