import styled from '@emotion/styled';
import { Generators } from '@styles/generator';

export const FollowersContainer = styled.section`
  ${Generators.flexGenerator('row', 'center', 'flex-start')};
  gap: 5rem;
  width: 100rem;
  height: 100vh;

  border: none;
`;

export const FollowTitle = styled.h3`
  ${Generators.fontGenerator('2rem', '700')};
`;

export const FollowerList = styled.div`
  ${Generators.flexGenerator('column', 'flex-start', 'center')};
  height: auto;
  padding: 2rem;
  overflow-y: auto;

  border: 0.1rem solid ${({ theme }) => theme.color.gray02};
`;

export const FollowAllButton = styled.button`
  ${Generators.flexGenerator('row', 'flex-end', 'center')};
`;
