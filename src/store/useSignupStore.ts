// store/signup-store.ts
import { create } from 'zustand';

interface SignupStore {
  phonenumber: string;
  setPhonenumber: (value: string) => void;
  reset: () => void;
}

export const useSignupStore = create<SignupStore>((set) => ({
  phonenumber: '',
  setPhonenumber: (value) => set({ phonenumber: value }),
  reset: () => set({ phonenumber: '' }),
}));
