import { LoginButton, SocialLogin } from '@atoms';
import { IcGithub } from '@assets/svg';
import { InputText } from '@molecules';
import { LoginPageWrapper } from './styles';

const LoginPage = () => {
  const handleLoginClick = () => {
    console.log('로그인');
  };

  return (
    <LoginPageWrapper>
      <IcGithub width="60" height="60" />
      <InputText label="GitHub token" />
      <LoginButton onClick={handleLoginClick}>Sign in</LoginButton>
      <SocialLogin>Sign in with GitHub</SocialLogin>
    </LoginPageWrapper>
  );
};

export default LoginPage;
