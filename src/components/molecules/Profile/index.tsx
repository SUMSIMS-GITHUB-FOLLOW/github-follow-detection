import { ProfileImage } from '@atoms';
import { useUserStore } from '@hooks/users';
import { ProfileName, ProfileId, ProfileFollow } from './style';

interface ProfiletProps {}

const Profile = ({ ...props }: ProfiletProps) => {
  const { user } = useUserStore();

  if (!user) return <></>;

  return (
    <>
      <ProfileImage src={user.avatar_url} size={'large'} alt={user.login} {...props} />
      <ProfileName>{user.name}</ProfileName>
      <ProfileId>{user.login}</ProfileId>
      <ProfileFollow>
        {user.followers} followers {user.following} following
      </ProfileFollow>
    </>
  );
};

export default Profile;
