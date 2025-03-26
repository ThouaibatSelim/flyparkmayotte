import { useContext, useState } from "react";
import { SessionContext } from "../context/SessionContext";

function Login() {
    const { user, login, logout } = useContext(SessionContext);
    const [username, setUsername] = useState("");

    const handleLogin = () => {
        login(username);
        setUsername("");
    };

    return (
        <div>
            {user ? (
                <div>
                    <p>Bienvenue, {user.name} !</p>
                    <button onClick={logout}>Se déconnecter</button>
                </div>
            ) : (
                <div>
                    <input 
                        type="text" 
                        placeholder="Nom d'utilisateur" 
                        value={username} 
                        onChange={(e) => setUsername(e.target.value)}
                    />
                    <button onClick={handleLogin}>Se connecter</button>
                </div>
            )}
        </div>
    );
}

export default Login;
