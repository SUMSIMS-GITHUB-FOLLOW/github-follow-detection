import React from 'react';
import { FormWrapper } from './styles';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

const Form = ({ children, ...props }: ButtonProps) => {
  return <FormWrapper {...props}>{children}</FormWrapper>;
};

export default Form;
