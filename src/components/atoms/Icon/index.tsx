import { IconContainer } from './styles';

interface IconProps {
  src: string;
  alt?: string;
}

const index = ({ src, alt }: IconProps) => {
  return <IconContainer src={src} className="icon" alt={alt} />;
};

export default index;
