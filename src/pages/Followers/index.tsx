import { FollowerCard } from '@organisms';
import { FollowersContainer, FollowerList, FollowTitle, FollowAllButton } from './styles';
import { useTokenStore, useUserStore } from '@hooks/users/useUserStore';
import { putUser } from '@apis/users';
import { Profile } from '@molecules';

const Index = () => {
  const { followForFollow, nonFollowForFollow } = useUserStore();
  const { token } = useTokenStore();

  const handleClickFollow = (userId: string) => {
    putUser(userId, token);
  };

  const handleClickFollowAll = () => {
    nonFollowForFollow.forEach((follower) => {
      putUser(follower.login, token);
    });
  };

  return (
    <FollowersContainer>
      <Profile />
      <FollowerList>
        <FollowTitle>맞팔인 사람</FollowTitle>
        {followForFollow.map((follower, index) => {
          return (
            <FollowerCard
              key={`follower-${index}`}
              isFollow={true}
              profileId={follower.login}
              profileImgSrc={follower.avatar_url}
            />
          );
        })}
      </FollowerList>
      <FollowerList>
        <FollowTitle>맞팔이 아닌 사람</FollowTitle>
        <FollowAllButton onClick={handleClickFollowAll}>모두 맞팔하기</FollowAllButton>
        {nonFollowForFollow.map((follower, index) => {
          return (
            <FollowerCard
              key={`follower-${index}`}
              isFollow={false}
              profileId={follower.login}
              profileImgSrc={follower.avatar_url}
              onClickFollow={handleClickFollow}
            />
          );
        })}
      </FollowerList>
    </FollowersContainer>
  );
};

export default Index;
