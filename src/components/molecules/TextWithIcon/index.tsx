import { Icon } from '@atoms';
import { TextWithIconContainer } from './styles';

interface TextWithIconProps {
  text: string;
  iconSrc?: string;
}

const index = ({ text, iconSrc }: TextWithIconProps) => {
  return (
    <TextWithIconContainer className="textWithIcon">
      {iconSrc && <Icon src={iconSrc} />}
      <span className="text">{text}</span>
    </TextWithIconContainer>
  );
};

export default index;
