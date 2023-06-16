import { createContext, useContext, useState } from "react";

interface AuthContextData {
  token: string;
  setToken: (token: string) => void;
}

const AuthContext = createContext<AuthContextData | undefined>(undefined);

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
}

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [token, setToken] = useState("");

  const value: AuthContextData = {
    token,
    setToken,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
