import styled from '@emotion/styled';
import { Generators } from '@styles/generator';

export const CheckedContainer = styled.div`
  ${Generators.flexGenerator()};

  span:first-of-type {
    color: ${({ theme }) => theme.color.green};
  }
`;

export const ButtonContainer = styled.button`
  padding: 0.5rem 1rem;

  color: ${({ theme }) => theme.color.black};

  background-color: ${({ theme }) => theme.color.gray01};
  cursor: pointer;
  border: 0.1rem solid ${({ theme }) => theme.color.gray03};
  border-radius: 0.4rem;
`;
