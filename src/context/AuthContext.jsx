import { createContext, useState, useEffect } from "react";
// import api from "../services/publicApi"; // your axios instance

import { publicApi } from "../services/publicApi";
export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // Load user & token from storage on mount
  useEffect(() => {
    const loadUser = () => {
      const storedUser = localStorage.getItem("user");
      const token = localStorage.getItem("token");

      if (storedUser && token) {
        const parsedUser = JSON.parse(storedUser);
        setUser(parsedUser);

        // Optional: verify token still valid by calling /me endpoint
        // api.get('/auth/me').catch(() => logout());
      }
      setLoading(false);
    };

    loadUser();
  }, []);

  const login = async (email, password) => {
    try {
      const response = await publicApi.post("/authentication/login", {
        email,
        password,
      });

      const { token, user: userData } = response.data; // assume backend returns { token, user }

      localStorage.setItem("token", token);
      localStorage.setItem("user", JSON.stringify(userData));

      setUser(userData);
      return true;
    } catch (error) {
      console.error("Login failed:", error);
      throw error.response?.data?.message || "Login failed";
    }
  };

  const register = async ({ name, email, password }) => {
    try {
      const response = await api.post("/auth/register", {
        name,
        email,
        password,
      });

      const { token, user: userData } = response.data;

      localStorage.setItem("token", token);
      localStorage.setItem("user", JSON.stringify(userData));

      setUser(userData);
      return true;
    } catch (error) {
      console.error("Register failed:", error);
      throw error.response?.data?.message || "Registration failed";
    }
  };

  const logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    setUser(null);
  };

  // Optional: add function to update user profile later
  const updateUser = (newData) => {
    const updated = { ...user, ...newData };
    localStorage.setItem("user", JSON.stringify(updated));
    setUser(updated);
  };

  const value = {
    user,
    loading,
    login,
    register,
    logout,
    updateUser,
    isAuthenticated: !!user,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
