import { UserState } from '@typings/users/usersType';
import { create } from 'zustand';

export const useUserStore = create<UserState>((set) => ({
  user: null,
  setUser: (user) => set({ user }),
}));
