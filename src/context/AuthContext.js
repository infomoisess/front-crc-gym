import React, { createContext, useState, useEffect } from "react";
import axios from "axios";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const API_URL = process.env.REACT_APP_API_URL;

  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user"));
    if (user) {
      setCurrentUser(user);
    }
  }, []);

  const login = async (email, password) => {
    try {
      const response = await axios.post(`${API_URL}usuarios/login`, {
        email,
        password,
      });

      console.log("Login response:", response.data);
      setCurrentUser(response.data);
      localStorage.setItem("user", JSON.stringify(response.data));
    } catch (error) {
      console.error("Error al iniciar sesión:", error);
    }
  };

  const logout = async () => {
    try {
      await axios.get(`${API_URL}logout`);
      localStorage.removeItem("user");
      setCurrentUser(null);
    } catch (error) {
      console.error("Error al cerrar sesión:", error);
    }
  };

  return (
    <AuthContext.Provider
      value={{ currentUser, setCurrentUser, login, logout }}
    >
      {children}
    </AuthContext.Provider>
  );
};
