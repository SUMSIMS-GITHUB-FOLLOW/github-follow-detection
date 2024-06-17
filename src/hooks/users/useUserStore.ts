import { UserState, TokenState } from '@typings/users/usersType';
import { create } from 'zustand';

export const useUserStore = create<UserState>((set) => ({
  user: null,
  setUser: (user) => set({ user }),
}));

export const useTokenStore = create<TokenState>((set) => ({
  token: '',
  setToken: (token) => set({ token }),
}));
