import styled from '@emotion/styled';
import { Generators } from '@styles/generator';

export const FormWrapper = styled.section`
  ${Generators.flexGenerator('column')}
  gap: 2rem;
  width: 32rem;
  padding: 2rem 0;
  ${Generators.fontGenerator('1.8rem', '400')}

  background: ${({ theme }) => theme.color.gray01};
  border: 0.1rem solid ${({ theme }) => theme.color.gray03};
  border-radius: 0.8rem;
`;
