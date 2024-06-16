import { LoginButton, SocialLogin } from '@atoms';

const LoginPage = () => {
  const handleLoginClick = () => {
    console.log('로그인');
  };

  return (
    <>
      <LoginButton onClick={handleLoginClick}>Sign in</LoginButton>
      <SocialLogin>Sign in with GitHub</SocialLogin>
    </>
  );
};

export default LoginPage;
