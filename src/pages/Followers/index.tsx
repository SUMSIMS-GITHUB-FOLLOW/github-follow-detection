import { FollowerCard } from '@organisms';
import { FollowersContainer } from './styles';
import { Profile } from '@molecules';

const index = () => {
  return (
    <>
      <Profile />
      <FollowersContainer>
        <FollowerCard />
      </FollowersContainer>
    </>
  );
};

export default index;
