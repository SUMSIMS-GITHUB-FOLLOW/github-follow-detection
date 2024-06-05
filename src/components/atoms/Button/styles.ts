import { SerializedStyles } from '@emotion/react';
import styled from '@emotion/styled';

interface ButtonContainerProps {
  customStyle?: SerializedStyles;
}

export const ButtonContainer = styled.button<ButtonContainerProps>`
  width: 10rem;
  height: 4rem;

  background-color: ${({ theme }) => theme.color.primary1};

  ${(props) => props.customStyle}
`;
