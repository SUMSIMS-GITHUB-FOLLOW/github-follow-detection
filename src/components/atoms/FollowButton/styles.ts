import styled from '@emotion/styled';

export const ButtonContainer = styled.button`
  padding: 0.5rem 1rem;

  color: ${({ theme }) => theme.color.white};

  background-color: ${({ theme }) => theme.color.gray};
  border: none;
  border-radius: 0.4rem;
`;
