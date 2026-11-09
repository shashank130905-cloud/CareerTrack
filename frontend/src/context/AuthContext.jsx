import React, { createContext, useContext, useState } from 'react';
import api from '../api';
const AuthContext = createContext(null);
export function AuthProvider({ children }) {
  const [admin, setAdmin] = useState(() => {
    try { return JSON.parse(sessionStorage.getItem('ct_admin') || 'null'); } catch { return null; }
  });
  async function login(email, password) {
    const { data } = await api.post('/auth/login', { email, password });
    sessionStorage.setItem('ct_token', data.token);
    sessionStorage.setItem('ct_admin', JSON.stringify(data.admin));
    setAdmin(data.admin);
  }
  function logout() { sessionStorage.removeItem('ct_token'); sessionStorage.removeItem('ct_admin'); setAdmin(null); }
  return <AuthContext.Provider value={{ admin, login, logout }}>{children}</AuthContext.Provider>;
}
export const useAuth = () => useContext(AuthContext);