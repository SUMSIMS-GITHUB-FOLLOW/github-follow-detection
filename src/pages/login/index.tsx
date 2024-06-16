import { IcGithub } from '@assets/svg';
import { LoginButton } from '@atoms';
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
    </LoginPageWrapper>
  );
};

export default LoginPage;
