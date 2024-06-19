import { FollowButton, ProfileImage } from '@atoms';
import { FollowerCardContainer, FollowerProfileContainer, FollowerId } from './styles';

// TODO: API에 맞춰 수정 예정
interface FollowerCardProps {
  text?: string;
  iconSrc?: string;
}

const data = {
  src: '/svg/ic_github.svg',
  id: 'jungwoo3490',
};

const index = ({ text, iconSrc }: FollowerCardProps) => {
  return (
    <FollowerCardContainer className="followerCard">
      <FollowerProfileContainer>
        <ProfileImage src={data.src} size="small" />
        <FollowerId>{data.id}</FollowerId>
      </FollowerProfileContainer>
      <FollowButton label="Follow" />
    </FollowerCardContainer>
  );
};

export default index;
