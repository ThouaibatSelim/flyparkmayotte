import React, { useState } from "react";
import "../styles/connexion.css"; // Importation du fichier CSS

const LoginForm = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        setError("");

        if (!email || !password) {
            setError("Tous les champs sont obligatoires.");
            return;
        }

        console.log("Connexion avec :", { email, password });
        // Ici, tu peux envoyer les données au backend
    };

    return (
        <div className="connexion-container">
            <h2>Connexion</h2>
            {error && <p className="error">{error}</p>}
            <form onSubmit={handleSubmit}>
                <label>Email :</label>
                <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Entrez votre email"
                />

                <label>Mot de passe :</label>
                <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Entrez votre mot de passe"
                />

                <button type="submit">Se connecter</button>
            </form>
            <p>Mot de passe oublié ? <a href="#">Réinitialiser</a></p>
        </div>
    );
};

export default LoginForm;

