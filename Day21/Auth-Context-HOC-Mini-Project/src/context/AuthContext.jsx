import { createContext, useState } from "react";

// Create one shared context for authentication data.
export const AuthContext = createContext(null);

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);

  // Demo login: in a real app, validate credentials with a backend API.
  function login() {
    setUser({
      name: "Bala",
      role: "Admin",
    });
  }

  function logout() {
    setUser(null);
  }

  const authValue = { user, login, logout };

  return (
    <AuthContext.Provider value={authValue}>
      {children}
    </AuthContext.Provider>
  );
}