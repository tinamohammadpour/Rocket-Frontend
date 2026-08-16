// store/signup-store.ts
import { create } from 'zustand';

interface SignupStore {
  phonenumber: string;
  username: string;
  setPhonenumber: (value: string) => void;
  setUsername: (value: string) => void;
  reset: () => void;
}

export const useSignupStore = create<SignupStore>((set) => ({
  phonenumber: '',
  username: '',
  setPhonenumber: (value) => set({ phonenumber: value }),
  setUsername: (value) => set({ username: value }),
  reset: () => set({ phonenumber: '', username: '' }),
}));
