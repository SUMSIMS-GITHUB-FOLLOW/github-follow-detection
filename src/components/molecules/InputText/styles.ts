import styled from '@emotion/styled';
import { Generators } from '@styles/generator';

export const InputTextWrapper = styled.section`
  ${Generators.flexGenerator('column', 'center', 'start')}
  gap: 1rem;
  width: max-content;
  margin: 2rem auto;
`;

export const StyledText = styled.label`
  ${Generators.fontGenerator('1.8rem', '400')}
`;
