import { useEffect, useState } from "react";
import { AuthContext } from "./AuthContext";

interface AuthProviderProps {
    children: React.ReactNode
}

export function AuthProvider({ children }: AuthProviderProps) {
  const [user, setUser] = useState<{ email: string, name: string }| null>(null );
  const [isLoading, setIsLoading] = useState(true); // Vital para UX!

  // Simula verificação de login ao abrir o app
  useEffect(() => {
    setTimeout(() => setIsLoading(false), 2000); 
  }, []);

  const login = (email: string, name: string) => setUser({ email, name });
  const logout = () => setUser(null);

  return (
    <AuthContext.Provider value={{ user, login, logout, isLoading }}>
      {children}
    </AuthContext.Provider>
  );
}
