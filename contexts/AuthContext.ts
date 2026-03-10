
import { createContext } from "react";

type AuthContextType = {
  user: string | null;
  login: (name: string) => void;
  logout: () => void;
};

export const AuthContext = createContext<AuthContextType>({
  user: null,
  login: () => {},
  logout: () => {},
});
