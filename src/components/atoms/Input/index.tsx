import React from 'react';
import { StyledInput } from './styles';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const Input = ({ value, onChange, ...props }: InputProps) => {
  return <StyledInput {...props} value={value} onChange={onChange} />;
};

export default Input;
