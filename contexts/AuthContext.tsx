import { createContext, useState, useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

type AuthContextData = {
  user: string | null;
  login: (name: string) => void;
  logout: () => void;
};

export const AuthContext = createContext<AuthContextData>(
  {} as AuthContextData
);

export function AuthProvider({ children }: any) {
  const [user, setUser] = useState<string | null>(null);

  useEffect(() => {
    loadUser();
  }, []);

  async function loadUser() {
    const storedUser = await AsyncStorage.getItem("@user");
    if (storedUser) {
      setUser(storedUser);
    }
  }

  async function login(name: string) {
    setUser(name);
    await AsyncStorage.setItem("@user", name);
  }

  async function logout() {
    setUser(null);
    await AsyncStorage.removeItem("@user");
  }

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}