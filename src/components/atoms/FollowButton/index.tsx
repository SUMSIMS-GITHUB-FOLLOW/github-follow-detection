import { CheckedContainer, ButtonContainer } from './styles';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  label: string;
  isFollow?: boolean;
  profileId: string;
  onClickFollow?: (userId: string) => void;
}

const index = ({ label, isFollow, profileId, onClickFollow = () => {}, ...props }: ButtonProps) => {
  return isFollow ? (
    <CheckedContainer>
      <span className="material-symbols-outlined">check</span>
      <span>Followed</span>
    </CheckedContainer>
  ) : (
    <ButtonContainer
      className="button"
      onClick={() => {
        onClickFollow(profileId);
      }}
      {...props}>
      {label}
    </ButtonContainer>
  );
};

export default index;
