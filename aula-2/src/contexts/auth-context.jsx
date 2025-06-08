import React, { createContext, useContext, useState } from 'react';

import { loginService } from '../services/login-service';
import { registerService } from '../services/register-service';
import { logoutService } from '../services/logout-service';

export const AuthContext = createContext(null);

export function AuthContextProvider({ children }) {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const login = async ({ email, password }) => {
        try {
            setLoading(true);
            const user = await loginService({ email, password });
            setUser(user);
        } catch (error) {
            if (error instanceof Error) {
                setError(error.message);
            }
        } finally {
            setLoading(false);
        }
    };

    const register = async ({ email, password, confirmationPassword }) => {
        try {
            setLoading(true);
            const user = await registerService({ email, password, confirmationPassword });
            setUser(user);
        } catch (error) {
            if (error instanceof Error) {
                setError(error.message);
            }
        } finally {
            setLoading(false);
        }
    };

    const logout = async () => {
        try {
            setLoading(true);
            await logoutService();
            setUser(null);
        } catch (error) {
            if (error instanceof Error) {
                setError(error.message);
            }
        } finally {
            setLoading(false);
        }
    };

    return <AuthContext.Provider value={{ user, loading, error, login, register, logout }}>{children}</AuthContext.Provider>;
}

export const useAuthContext = () => {
    const context = useContext(AuthContext);
    if (!context) {
        throw new Error('Precisa estar envolvido dentro de AuthContextProvider');
    }
    return context;
};
