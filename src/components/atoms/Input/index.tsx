import React from 'react';
import { StyledInput } from './styles';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {}

const Input = ({ ...props }: InputProps) => {
  return <StyledInput {...props} />;
};

export default Input;
