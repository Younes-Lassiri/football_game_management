import React, { createContext, useState, useEffect } from 'react';
import getUserIdFromToken from '../TokenDecode/tokenDecode';
import axios from 'axios';
export const AuthContext = createContext();
export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  useEffect(() => {
    const handleStorageChange = () => {
      fetchUser();
    };
    window.addEventListener('storage', handleStorageChange);
    return () => {
      window.removeEventListener('storage', handleStorageChange);
    };
  }, []);
  useEffect(() => {
    fetchUser();
  }, [sessionStorage.getItem('token')]);
  const fetchUser = async () => {
    const token = sessionStorage.getItem("token");
    if (token) {
      const userId = getUserIdFromToken(token);
      if (userId) {
        try {
          const response = await axios.get(`http://localhost:8000/api/auth/user/${userId}`, {
            headers: { Authorization: `Bearer ${token}` }
          });
          setUser(response.data.user);
          setIsAuthenticated(true);
        } catch (error) {
          console.error("Error fetching user data:", error);
          setIsAuthenticated(false);
        }
      } else {
        setIsAuthenticated(false);
      }
    } else {
      setIsAuthenticated(false);
    }
  };
  const login = async (values) => {
    try {
      const response = await axios.post("http://localhost:8000/api/auth/login", values);
      if (response.status === 200 && response.data.token) {
        const { token } = response.data;
        sessionStorage.setItem("token", token);
        await fetchUser();
        return { success: true };
      }
    } catch (error) {
      console.error("Login error:", error.response);
      if (error.response && error.response.status === 400) {
        return { success: false, message: "Invalid email or password. Please try again." };
      }
      return { success: false, message: "An error occurred. Please try again later." };
    }
  };
  const logout = () => {
    sessionStorage.removeItem("token");
    setUser(null);
    setIsAuthenticated(false);
  };
  return (
    <AuthContext.Provider value={{ user, isAuthenticated, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
