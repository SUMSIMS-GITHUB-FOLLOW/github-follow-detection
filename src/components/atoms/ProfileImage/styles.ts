import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { CssType } from '@typings/commonType';

interface ProfileImageContainerProps {
  size?: 'small' | 'large';
}

export const ProfileImageSizes: CssType = {
  small: css`
    width: 5rem;
    height: 5rem;
  `,
  large: css`
    width: 29.4rem;
    height: 29.4rem;
  `,
};

export const ProfileImageContainer = styled.img<ProfileImageContainerProps>`
  object-fit: cover;

  border-radius: 50%;
  ${(props) => props.size && ProfileImageSizes[props.size]}
`;
