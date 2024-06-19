import styled from '@emotion/styled';
import { Generators } from '@styles/generator';

export const ProfileName = styled.p`
  color: ${({ theme }) => theme.color.black};

  ${Generators.fontGenerator('3rem', '800')}
`;
export const ProfileId = styled.p`
  color: ${({ theme }) => theme.color.gray05};

  ${Generators.fontGenerator('1.5rem', '600')}
`;
export const ProfileFollow = styled.p`
  color: ${({ theme }) => theme.color.gray05};

  ${Generators.fontGenerator('1.5rem', '600')}
`;
