import { createContext, useContext, useState, useEffect } from "react";
import { authService } from "../services/auth.service";

export const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const storedUser = localStorage.getItem("hms_user");
        if (storedUser) {
            try {
                setUser(JSON.parse(storedUser));
            } catch (error) {
                console.error("Failed to parse stored user", error);
                localStorage.removeItem("hms_user");
            }
        }
        setLoading(false);
    }, []);

    const login = async (role, id, password) => {
        try {
            const userData = await authService.login(role, id, password);
            setUser(userData);
            localStorage.setItem("hms_user", JSON.stringify(userData));
            return { success: true };
        } catch (error) {
            return { success: false, error: error.message };
        }
    };

    const logout = async () => {
        await authService.logout();
        setUser(null);
        localStorage.removeItem("hms_user");
    };

    return (
        <AuthContext.Provider value={{ user, login, logout, isLoading: loading }}>
            {!loading && children}
        </AuthContext.Provider>
    );
};

export const useAuthContext = () => useContext(AuthContext);
