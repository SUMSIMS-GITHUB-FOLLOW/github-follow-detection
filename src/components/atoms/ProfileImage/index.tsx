import { ProfileImageContainer } from './styles';

interface ProfileImageProps {
  src: string;
  alt?: string;
  size?: 'small' | 'large';
}

const index = ({ src, size = 'small', alt = 'profile-image', ...props }: ProfileImageProps) => {
  return (
    <ProfileImageContainer src={src} className="profile-image" size={size} alt={alt} {...props} />
  );
};

export default index;
