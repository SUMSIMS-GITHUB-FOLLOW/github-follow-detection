import styled from '@emotion/styled';
import { Generators } from '@styles/generator';

export const ProfileWrapper = styled.section`
  ${Generators.flexGenerator('column', 'center', 'start')}
  gap: 1rem;
  margin: 5rem;
`;

export const ProfileName = styled.p`
  color: ${({ theme }) => theme.color.black};

  ${Generators.fontGenerator('3rem', '800')}
`;
export const ProfileId = styled.p`
  color: ${({ theme }) => theme.color.gray05};

  ${Generators.fontGenerator('1.5rem', '600')}
`;
export const ProfileBio = styled.p`
  color: ${({ theme }) => theme.color.gray05};

  ${Generators.fontGenerator('1.5rem', '600')}
`;
export const ProfileFollow = styled.p`
  ${Generators.flexGenerator('row', 'start')}
  color: ${({ theme }) => theme.color.gray05};

  ${Generators.fontGenerator('1.5rem', '600')}
`;
export const ProfileCompany = styled.p`
  ${Generators.flexGenerator('row', 'start')}
  color: ${({ theme }) => theme.color.gray05};

  ${Generators.fontGenerator('1.5rem', '600')}
`;
export const ProfileLocation = styled.p`
  ${Generators.flexGenerator('row', 'start')}
  color: ${({ theme }) => theme.color.gray05};

  ${Generators.fontGenerator('1.5rem', '600')}
`;
