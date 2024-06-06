import styled from '@emotion/styled';
import { Generators } from '@styles/generator';

export const FollowersContainer = styled.div`
  ${Generators.flexGenerator('column')}
  background-color: ${({ theme }) => theme.color.gray01};
`;
