import { ProfileImage } from '@atoms';
import { useUserStore } from '@hooks/users';
import {
  ProfileWrapper,
  ProfileName,
  ProfileId,
  ProfileBio,
  ProfileFollow,
  ProfileCompany,
  ProfileLocation,
} from './style';
import { IcCompany, IcFollower, IcLocation } from '@assets/svg';

interface ProfiletProps {}

const Profile = ({ ...props }: ProfiletProps) => {
  const { user } = useUserStore();

  if (!user) return <></>;

  return (
    <ProfileWrapper>
      <ProfileImage src={user.avatar_url} size={'large'} alt={user.login} {...props} />
      <ProfileName>{user.name}</ProfileName>
      <ProfileId>{user.login}</ProfileId>
      <ProfileBio>{user.bio}</ProfileBio>
      <ProfileFollow>
        <IcFollower width="20" />
        {user.followers} followers {user.following} following
      </ProfileFollow>
      {user.company && (
        <ProfileCompany>
          <IcCompany width="20" />
          {user.company}
        </ProfileCompany>
      )}
      {user.location && (
        <ProfileLocation>
          <IcLocation width="20" />
          {user.location}
        </ProfileLocation>
      )}
    </ProfileWrapper>
  );
};

export default Profile;
