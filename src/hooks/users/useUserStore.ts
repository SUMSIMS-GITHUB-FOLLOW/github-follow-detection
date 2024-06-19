import { UserState, TokenState } from '@typings/users/usersType';
import { create } from 'zustand';

export const useUserStore = create<UserState>((set) => ({
  user: null,
  followForFollow: [],
  nonFollowForFollow: [],
  setUser: (user) => set({ user }),
  setFollowForFollow: (followForFollow) => set({ followForFollow }),
  setNonFollowForFollow: (nonFollowForFollow) => set({ nonFollowForFollow }),
}));

export const useTokenStore = create<TokenState>((set) => ({
  token: '',
  setToken: (token) => set({ token }),
}));
