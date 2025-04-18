import { create } from 'zustand';
import AsyncStorage from '@react-native-async-storage/async-storage';
import i18n from '../i18n';

type AuthState = {
  isAuthenticated: boolean;
  userToken: string | null;
  themeMode: 'light' | 'dark';
  setAuth: (token: string | null) => void;
  toggleTheme: () => void;
  language: string;
  setLanguage: (lang: string) => void;
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
  language: i18n.locale,
  setLanguage: (lang) => {
    i18n.locale = lang;
    set({ language: lang });
    AsyncStorage.setItem('language', lang);
  },
}));

export default useAuthStore;
