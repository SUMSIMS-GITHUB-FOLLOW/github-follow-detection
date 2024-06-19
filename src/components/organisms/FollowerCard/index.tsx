import { FollowButton, ProfileImage } from '@atoms';
import { TextWithIcon } from '@molecules';
import {
  FollowerCardContainer,
  FollowerProfileContainer,
  FollowerProfileInfoContainer,
  FollowerNameWrapper,
  FollowerName,
  FollowerId,
  FollowerBio,
  FollowerCompanyWrapper,
} from './styles';


// TODO: API에 맞춰 수정 예정
interface FollowerCardProps {
  text?: string;
  iconSrc?: string;
}

const data = {
  name: 'Jungwoo LEE',
  id: 'jungwoo3490',
  bio: 'Front-End Developer',
  company: 'KGU CSE @sopt',
  location: 'South Korea',
};

const index = ({ text, iconSrc }: FollowerCardProps) => {
  return (
    <FollowerCardContainer className="followerCard">
      <FollowerProfileContainer>
        <ProfileImage src="/svg/ic_github.svg" size="small" />
        <FollowerProfileInfoContainer>
          <FollowerNameWrapper>
            <FollowerName>{data.name}</FollowerName>
            <FollowerId>{data.id}</FollowerId>
          </FollowerNameWrapper>
          <FollowerBio>{data.bio}</FollowerBio>
          <FollowerCompanyWrapper>
            <TextWithIcon text={data.company} iconSrc="/svg/ic_company.svg" />
            <TextWithIcon text={data.location} iconSrc="/svg/ic_location.svg" />
          </FollowerCompanyWrapper>
        </FollowerProfileInfoContainer>
      </FollowerProfileContainer>
      <FollowButton label="Follow" />
    </FollowerCardContainer>
  );
};

export default index;
