import { ProfileImageContainer } from './styles';

interface ProfileImageProps {
  src: string;
  alt?: string;
  size?: 'small' | 'large';
  onClick?: () => void;
}

const index = ({
  src,
  size = 'small',
  alt = 'profile-image',
  onClick,
  ...props
}: ProfileImageProps) => {
  return (
    <ProfileImageContainer
      src={src}
      className="profile-image"
      size={size}
      alt={alt}
      onClick={onClick}
      {...props}
    />
  );
};

export default index;
