import React from 'react';
import { SocialLoginWrapper } from './styles';

interface SocialLoginProps {
  children: React.ReactNode;
}

const SocialLogin = ({ children }: SocialLoginProps) => {
  return <SocialLoginWrapper>{children}</SocialLoginWrapper>;
};

export default SocialLogin;
