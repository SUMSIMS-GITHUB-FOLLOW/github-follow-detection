import React from 'react';
import { SerializedStyles } from '@emotion/react';
import { StyledInput } from './styles';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  customStyle?: SerializedStyles;
}

const Input = ({ customStyle, ...props }: InputProps) => {
  return <StyledInput customStyle={customStyle} {...props} />;
};

export default Input;
