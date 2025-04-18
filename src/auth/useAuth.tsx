import { createContext, useContext, useState, useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import useAuthStore from "../store/useAuthStore";  // <— import your Zustand store
import i18n from "../i18n";

type User = {
  id: string;
  name: string;
  email: string;
  isPremium: boolean;
  token: string;
};

type AuthContextType = {
  user: User | null;
  isAuthenticated: boolean;
  isPremium: boolean;
  login: (user: User) => void;
  logout: () => void;
};

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);
  const setLanguage = useAuthStore((s) => s.setLanguage);


  useEffect(() => {
    const loadUser = async () => {
      try {
        const raw = await AsyncStorage.getItem("user");
        if (raw) setUser(JSON.parse(raw));
      } catch (error) {
        console.error("Failed to load user data:", error);
      }

      try {
        const lang = await AsyncStorage.getItem("language");
        if (lang) {
          // update i18n and Zustand store
          i18n.locale = lang;
          setLanguage(lang);
        }
      } catch (err) {}
    };
    
    loadUser();
  }, []);

  const login = async (data: User) => {
    setUser(data);
    try {
      await AsyncStorage.setItem("user", JSON.stringify(data));
    } catch (error) {
      console.error("Failed to save user data:", error);
    }
  };

  const logout = async () => {
    setUser(null);
    try {
      await AsyncStorage.removeItem("user");
    } catch (error) {
      console.error("Failed to remove user data:", error);
    }
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        isAuthenticated: !!user,
        isPremium: user?.isPremium ?? false,
        login,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) throw new Error("useAuth must be used within AuthProvider");
  return context;
};