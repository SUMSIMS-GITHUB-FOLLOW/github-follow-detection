import { LoginButton } from '@atoms';
import { useFetchUser, useUserStore } from '@hooks/users';

const LoginPage = () => {
  const token = import.meta.env.VITE_GITHUB_TOKEN;
  const { mutate: fetchUser } = useFetchUser();
  const user = useUserStore((state) => state.user);

  const handleLoginClick = () => {
    fetchUser(token);
    console.log(user);
  };

  return (
    <>
      <LoginButton onClick={handleLoginClick}>Sign in</LoginButton>
    </>
  );
};

export default LoginPage;
