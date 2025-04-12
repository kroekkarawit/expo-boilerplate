import { create } from 'zustand';

type AuthState = {
  isAuthenticated: boolean;
  userToken: string | null;
  themeMode: 'light' | 'dark';
  setAuth: (token: string | null) => void;
  toggleTheme: () => void;
};

const useAuthStore = create<AuthState>((set, get) => ({
  isAuthenticated: false,
  userToken: null,
  themeMode: 'light',
  setAuth: (token) =>
    set({
      isAuthenticated: Boolean(token),
      userToken: token,
    }),
  toggleTheme: () =>
    set({ themeMode: get().themeMode === 'light' ? 'dark' : 'light' }),
}));

export default useAuthStore;
