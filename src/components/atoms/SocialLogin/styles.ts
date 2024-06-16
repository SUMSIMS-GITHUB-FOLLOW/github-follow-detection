import styled from '@emotion/styled';
import { Generators } from '@styles/generator';

export const SocialLoginWrapper = styled.section`
  ${Generators.flexGenerator()}
  gap: 1rem;
  width: 32rem;
  margin: 0 auto;
  padding: 1.2rem 3.5rem;

  color: ${({ theme }) => theme.color.blue};

  ${Generators.fontGenerator('1.8rem', '600')}
  background: none;
  cursor: pointer;
  border: 0.1rem solid ${({ theme }) => theme.color.gray03};
  border-radius: 0.8rem;
`;
