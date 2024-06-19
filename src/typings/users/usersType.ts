export interface User {
  login: string;
  id: number;
  avatar_url: string;
  followers_url: string;
  following_url: string;
  name: string | null;
  company: string | null;
  blog: string | null;
  location: string | null;
  email: string | null;
  hireable: boolean;
  bio: string | null;
  twitter_username: string | null;
  followers: number;
  following: number;
}

export interface UserState {
  user: User | null;
  followForFollow: User[];
  nonFollowForFollow: User[];
  setUser: (user: User) => void;
  setFollowForFollow: (followers: User[]) => void;
  setNonFollowForFollow: (followers: User[]) => void;
}
