import React from 'react';
import { StyledInput } from './styles';
import { useTokenStore } from '@hooks/users';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {}

const Input = ({ ...props }: InputProps) => {
  const { token, setToken } = useTokenStore();

  return <StyledInput {...props} value={token} onChange={(e) => setToken(e.target.value)} />;
};

export default Input;
