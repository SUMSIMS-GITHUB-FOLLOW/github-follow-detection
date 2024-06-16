import { ButtonContainer } from './styles';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  label: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

const index = ({ label, onClick = () => {}, ...props }: ButtonProps) => {
  return (
    <ButtonContainer className="button" onClick={onClick} {...props}>
      {label}
    </ButtonContainer>
  );
};

export default index;
