import { atom } from 'recoil';

// Define a type for the default value
const authModalState = {
  open: false,
  view: 'login' as 'login' | 'signup' | 'resetPassword',
};

export const authModalStateAtom = atom<typeof authModalState>({
  key: 'authModalState',
  default: authModalState, // default value (aka initial value)
});
