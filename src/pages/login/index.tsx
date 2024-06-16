import { IcGithub } from '@assets/svg';
import { LoginButton } from '@atoms';
import { InputText } from '@molecules';

const LoginPage = () => {
  const handleLoginClick = () => {
    console.log('로그인');
  };

  return (
    <>
      <IcGithub />
      <InputText label="GitHub token" />
      <LoginButton onClick={handleLoginClick}>Sign in</LoginButton>
    </>
  );
};

export default LoginPage;
