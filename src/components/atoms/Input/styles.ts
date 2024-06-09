import { SerializedStyles } from '@emotion/react';
import styled from '@emotion/styled';

interface InputContainerProps {
  customStyle?: SerializedStyles;
}

export const StyledInput = styled.input<InputContainerProps>`
  box-sizing: border-box;
  width: 30rem;
  height: 3rem;
  padding: 2rem 1rem;

  box-shadow: 0 0.1rem 0.3rem rgb(27 31 35 / 12%);
  border: 0.1rem solid #d1d5da;
  border-radius: 8px;

  &:focus {
    outline: none;
    border: 0.2rem solid #0366d6;
  }

  ${(props) => props.customStyle}
`;
