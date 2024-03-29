"use client"
import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

interface AuthContextType {
  userInfo: Record<string, unknown> | null;
  login: (userData: Record<string, unknown>) => void;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

interface AuthProviderProps {
  children: ReactNode;
}

const AuthProvider = ({ children }: AuthProviderProps) => {
    const [userInfo, setUser] = useState<Record<string, unknown> | null>(null);

    useEffect(() => {
        const getStoredUserInfo = () => {
            if (typeof window !== 'undefined') {
                const storedUserInfo = localStorage.getItem('userInfo');
                return storedUserInfo ? JSON.parse(storedUserInfo) : null;
            }
            return null;
        }

        setUser(getStoredUserInfo());
    }, []);

    useEffect(() => {

        if (typeof window !== 'undefined') {

            if (userInfo) {

                localStorage.setItem('userInfo', JSON.stringify(userInfo));
                
            // } else {
            //     localStorage.removeItem('userInfo');
            }
        }
    }, [userInfo]);

    const login = (userData: Record<string, unknown>) => {
        setUser(userData);
    }

    const logout = () => {
        localStorage.removeItem('userInfo')
        setUser(null);
    }

    return (
        <AuthContext.Provider value={{ userInfo, login, logout }}>
            {children}
        </AuthContext.Provider>
    )
}

export const useAuth = () => {
    const context = useContext(AuthContext);
    if (context === undefined) {
      throw new Error('useAuth must be used within an AuthProvider');
    }
    return context;
}

export { AuthProvider, AuthContext }
