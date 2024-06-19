import React from 'react';
import { InputTextWrapper, StyledText } from './styles';
import { Input } from '@atoms';

interface InputTextProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const InputText = ({ label, value, onChange }: InputTextProps) => {
  return (
    <InputTextWrapper>
      <StyledText>{label}</StyledText>
      <Input value={value} onChange={onChange} />
    </InputTextWrapper>
  );
};

export default InputText;
