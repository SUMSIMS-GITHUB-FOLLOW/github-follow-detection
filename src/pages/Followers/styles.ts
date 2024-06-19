import styled from '@emotion/styled';
import { Generators } from '@styles/generator';

export const FollowersContainer = styled.button`
  ${Generators.flexGenerator('column', 'flex-start', 'center')};
  width: 100rem;
  height: 100vh;

  border: none;
`;
