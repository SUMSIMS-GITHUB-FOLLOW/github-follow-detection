import styled from '@emotion/styled';
import { Generators } from '@styles/generator';

export const StyledButton = styled.button`
  ${Generators.flexGenerator()}
  gap: 1rem;
  width: 30rem;
  margin: 0 auto;
  padding: 1.2rem 3.5rem;

  color: ${({ theme }) => theme.color.white};
  ${Generators.fontGenerator('1.8rem', '400')}

  background: ${({ theme }) => theme.color.green};
  border: none;
  border-radius: 0.8rem;
`;
