// src/context/AuthContext.jsx
import { createContext, useState, useEffect } from "react";
import {
  login as loginService,
  logout as logoutService,
} from "../services/authService";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(() => {
    const savedUser = localStorage.getItem("user");
    return savedUser ? JSON.parse(savedUser) : null;
  });

  const login = async (credentials) => {
    const loggedInUser = await loginService(credentials);
    setUser(loggedInUser);
    return loggedInUser;
  };

  const logout = () => {
    logoutService();
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
