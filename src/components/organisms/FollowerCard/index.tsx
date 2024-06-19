import { FollowButton, ProfileImage } from '@atoms';
import { FollowerCardContainer, FollowerProfileContainer, FollowerId } from './styles';

// TODO: API에 맞춰 수정 예정
interface FollowerCardProps {
  isFollow: boolean;
  profileId: string;
  profileImgSrc: string;
  onClickFollow?: (userId: string) => void;
}

const index = ({ isFollow, profileId, profileImgSrc, onClickFollow }: FollowerCardProps) => {
  return (
    <FollowerCardContainer className="followerCard">
      <FollowerProfileContainer>
        <ProfileImage src={profileImgSrc} size="small" />
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

export default index;
