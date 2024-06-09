import LoginButton from '../../components/atoms/LoginButton';

const LoginPage = () => {
  const handleLoginClick = () => {
    console.log('로그인');
  };

  return (
    <>
      <LoginButton onClick={handleLoginClick}>Sign in</LoginButton>
    </>
  );
};

export default LoginPage;
