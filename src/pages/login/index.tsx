import { useFetchUser } from '@hooks/users';
import { LoginButton, SocialLogin } from '@atoms';
import { IcGithub } from '@assets/svg';
import { InputText } from '@molecules';
import { LoginPageWrapper } from './styles';
import { useNavigate } from 'react-router-dom';

const LoginPage = () => {
  const token = import.meta.env.VITE_GITHUB_TOKEN;
  const navigate = useNavigate();
  const { mutate: fetchUser } = useFetchUser();

  const handleLoginClick = () => {
    fetchUser(token, {
      onSuccess: () => {
        navigate('/followers');
      },
    });
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
