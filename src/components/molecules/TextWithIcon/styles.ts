import styled from '@emotion/styled';
import { Generators } from '@styles/generator';

export const TextWithIconContainer = styled.div`
  ${Generators.flexGenerator()};
  ${Generators.fontGenerator('1.2rem')};
  gap: 0.4rem;
`;
