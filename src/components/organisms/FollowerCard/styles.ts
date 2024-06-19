import styled from '@emotion/styled';
import { Generators } from '@styles/generator';

export const FollowerCardContainer = styled.section`
  ${Generators.flexGenerator('row', 'space-between')};
  ${Generators.fontGenerator('1.2rem')};
  gap: 0.4rem;
  width: 100%;
  padding: 2.4rem 0;

  background-color: ${({ theme }) => theme.color.white};
  cursor: pointer;
`;

export const FollowerProfileContainer = styled.div`
  gap: 2rem;
  ${Generators.flexGenerator()};
  height: 100%;
`;

export const FollowerId = styled.p`
  ${Generators.fontGenerator('1.4rem')};
  color: ${({ theme }) => theme.color.gray07};
`;

export const FollowerButtonContainer = styled.div``;
