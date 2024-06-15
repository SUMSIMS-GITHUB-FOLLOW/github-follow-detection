import styled from '@emotion/styled';

export const StyledInput = styled.input`
  box-sizing: border-box;
  width: 30rem;
  height: 3rem;
  padding: 2rem 1rem;

  box-shadow: 0 0.1rem 0.3rem rgb(27 31 35 / 12%);
  border: 0.1rem solid ${({ theme }) => theme.color.gray02};
  border-radius: 0.8rem;

  &:focus {
    outline: none;
    border: 0.2rem solid ${({ theme }) => theme.color.blue};
  }
`;
