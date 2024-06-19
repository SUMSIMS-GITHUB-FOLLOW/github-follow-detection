import { FollowButton, ProfileImage } from '@atoms';
import { FollowerCardContainer, FollowerProfileContainer, FollowerId } from './styles';

interface FollowerCardProps {
  isFollow: boolean;
  profileId: string;
  profileImgSrc: string;
  onClickFollow?: (userId: string) => void;
}

const Index = ({ isFollow, profileId, profileImgSrc, onClickFollow }: FollowerCardProps) => {
  return (
    <FollowerCardContainer className="followerCard">
      <FollowerProfileContainer>
        <ProfileImage
          src={profileImgSrc}
          size="small"
          onClick={() => {
            window.open(`https://github.com/${profileId}`, '_blank');
          }}
        />
        <FollowerId>{profileId}</FollowerId>
      </FollowerProfileContainer>
      <FollowButton
        label="Follow"
        isFollow={isFollow}
        profileId={profileId}
        onClickFollow={onClickFollow}
      />
    </FollowerCardContainer>
  );
};

export default Index;
