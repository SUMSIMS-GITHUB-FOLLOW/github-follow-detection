import { useFetchUser } from '@hooks/users';
import { LoginButton, SocialLogin } from '@atoms';
import { IcGithub } from '@assets/svg';
import { InputText } from '@molecules';
import { LoginPageWrapper } from './styles';
import { useNavigate } from 'react-router-dom';
import { Form } from '@organisms';
import { useState } from 'react';

const LoginPage = () => {
  const [token, setToken] = useState('');
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
      <Form>
        <InputText label="GitHub token" value={token} onChange={(e) => setToken(e.target.value)} />
        <LoginButton onClick={handleLoginClick}>Sign in</LoginButton>
      </Form>
      <SocialLogin>Sign in with GitHub</SocialLogin>
    </LoginPageWrapper>
  );
};

export default LoginPage;
