import styled from '@emotion/styled';
import { Generators } from '@styles/generator';

export const LoginPageWrapper = styled.section`
  ${Generators.flexGenerator('column')}
  gap: 1rem;
  width: fit-content;
  margin: 3rem auto;
`;
