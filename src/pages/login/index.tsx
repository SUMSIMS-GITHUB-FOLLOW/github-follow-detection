import { useFetchUser, useUserStore } from '@hooks/users';
import { LoginButton, SocialLogin } from '@atoms';
import { IcGithub } from '@assets/svg';
import { InputText } from '@molecules';
import { LoginPageWrapper } from './styles';

const LoginPage = () => {
  const token = import.meta.env.VITE_GITHUB_TOKEN;
  const { mutate: fetchUser } = useFetchUser();
  const user = useUserStore((state) => state.user);

  const handleLoginClick = () => {
    fetchUser(token);
    console.log(user);
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
