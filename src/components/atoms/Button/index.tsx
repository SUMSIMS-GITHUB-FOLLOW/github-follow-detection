import { SerializedStyles, css } from '@emotion/react';
import { ButtonContainer } from './styles';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  label: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  customStyle?: SerializedStyles;
}

const index = ({ label, onClick = () => {}, customStyle = css``, ...props }: ButtonProps) => {
  return (
    <ButtonContainer className="button" onClick={onClick} customStyle={customStyle} {...props}>
      {label}
    </ButtonContainer>
  );
};

export default index;
