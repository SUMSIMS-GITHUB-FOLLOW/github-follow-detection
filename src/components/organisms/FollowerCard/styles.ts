import styled from '@emotion/styled';
import { Generators } from '@styles/generator';

export const FollowerCardContainer = styled.section`
  ${Generators.flexGenerator('row', 'space-between')};
  ${Generators.fontGenerator('1.2rem')};
  gap: 0.4rem;
  width: 100%;
  height: 12rem;
  padding: 2.4rem 0;

  background-color: ${({ theme }) => theme.color.white};
`;

export const FollowerProfileContainer = styled.div`
  gap: 2rem;
  ${Generators.flexGenerator()};
  height: 100%;
`;

export const FollowerProfileInfoContainer = styled.div`
  height: 100%;
  ${Generators.flexGenerator('column', 'space-between', 'flex-start')};
`;

export const FollowerNameWrapper = styled.div`
  ${Generators.flexGenerator()};
  gap: 1rem;
`;

export const FollowerName = styled.h3`
  ${Generators.fontGenerator('1.6rem')};
`;

export const FollowerId = styled.p`
  ${Generators.fontGenerator('1.4rem')};
  color: ${({ theme }) => theme.color.gray05};
`;

export const FollowerBio = styled.p`
  ${Generators.fontGenerator('1.2rem')};
  color: ${({ theme }) => theme.color.gray05};
`;

export const FollowerCompanyWrapper = styled.div`
  ${Generators.flexGenerator()};
  gap: 2rem;

  .text {
    color: ${({ theme }) => theme.color.gray06};
  }
`;

export const FollowerButtonContainer = styled.div``;
