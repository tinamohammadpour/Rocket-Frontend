import { create } from 'zustand';

interface UserData {
  username: string;
  phonenumber: string;
  permissions: string[];
  accessToken: string;
  refreshToken: string;
}

interface UserState {
  user: UserData | null;
  setUser: (user: UserData) => void;
}

export const useUserStore = create<UserState>((set) => ({
  user: null,
  setUser: (user) => set({ user }),
}));
