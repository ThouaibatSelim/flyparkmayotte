import { createContext, useState, useEffect } from "react";
import axios from "axios";

export const SessionContext = createContext();

export function SessionProvider({ children }) {
    const [user, setUser] = useState(null);

    // Vérifier si une session existe au chargement de l'application
    useEffect(() => {
        axios.get("http://localhost:5000/session", { withCredentials: true })
            .then(res => setUser(res.data.user))
            .catch(() => setUser(null));
    }, []);

    // Connexion
    const login = (username) => {
        axios.post("http://localhost:5000/login", { username }, { withCredentials: true })
            .then(res => setUser(res.data.user))
            .catch(err => console.error(err));
    };

    // Déconnexion
    const logout = () => {
        axios.post("http://localhost:5000/logout", {}, { withCredentials: true })
            .then(() => setUser(null))
            .catch(err => console.error(err));
    };

    return (
        <SessionContext.Provider value={{ user, login, logout }}>
            {children}
        </SessionContext.Provider>
    );
}
