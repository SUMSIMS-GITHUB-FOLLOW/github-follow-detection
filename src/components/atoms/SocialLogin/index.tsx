import React from 'react';
import { SocialLoginWrapper } from './styles';

interface ButtonProps {
  children: React.ReactNode;
}

const SocialLogin = ({ children }: ButtonProps) => {
  return <SocialLoginWrapper>{children}</SocialLoginWrapper>;
};

export default SocialLogin;
