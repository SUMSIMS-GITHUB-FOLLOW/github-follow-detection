import React from 'react';
import { FormWrapper } from './styles';

interface FormProps {
  children: React.ReactNode;
}

const Form = ({ children, ...props }: FormProps) => {
  return <FormWrapper {...props}>{children}</FormWrapper>;
};

export default Form;
