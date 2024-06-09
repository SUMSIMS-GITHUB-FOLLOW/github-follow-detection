import { SerializedStyles } from '@emotion/react';
import styled from '@emotion/styled';

interface ButtonContainerProps {
  customStyle?: SerializedStyles;
}

export const StyledButton = styled.button<ButtonContainerProps>`
  display: flex;
  flex-shrink: 0;
  gap: 10px;
  justify-content: center;
  align-items: center;
  width: 30rem;
  margin: 0 auto;
  padding: 12px 35px;

  color: ${({ theme }) => theme.color.white};
  font-weight: 400;
  font-size: 18px;
  font-style: normal;
  line-height: normal;

  background: #1f883d;
  border: none;
  border-radius: 8px;

  ${(props) => props.customStyle}
`;
