import React from 'react';
import { InputTextWrapper, StyledText } from './styles';
import { Input } from '@atoms';
import { useTokenStore } from '@hooks/users';

interface InputTextProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
}

const InputText = ({ label }: InputTextProps) => {
  const { token, setToken } = useTokenStore();

  return (
    <InputTextWrapper>
      <StyledText>{label}</StyledText>
      <Input value={token} onChange={(e) => setToken(e.target.value)} />
    </InputTextWrapper>
  );
};

export default InputText;
