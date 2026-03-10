
import AsyncStorage from "@react-native-async-storage/async-storage";
import React, { useEffect, useState } from "react";
import { AuthContext } from "./AuthContext";

type Props = {
  children: React.ReactNode;
};

export default function AuthProvider({ children }: Props) {
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
