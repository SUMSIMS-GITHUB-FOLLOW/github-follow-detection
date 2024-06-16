import React from 'react';
import { InputTextWrapper, StyledText } from './styles';
import { Input } from '@atoms';

interface InputTextProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
}

const InputText = ({ label }: InputTextProps) => {
  return (
    <InputTextWrapper>
      <StyledText>{label}</StyledText>
      <Input />
    </InputTextWrapper>
  );
};

export default InputText;
