import { createContext } from "react";
import type { User } from "../types/User";
import type { AuthData } from "../types/AuthData";

export type AuthContextType = {
  user: User | null;
  loading: boolean;
  register: (data: AuthData) => Promise<void>;
  login: (data: AuthData) => Promise<void>;
  logout: () => Promise<void>;
};

export const AuthContext = createContext<AuthContextType | undefined>(
  undefined
);
