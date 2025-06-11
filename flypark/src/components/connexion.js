import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/connexion.css";

function Connexion() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const navigate = useNavigate();

const handleSubmit = async function (e) {
    e.preventDefault();
    try {
        const response = await fetch("http://localhost:5000/connexion", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ email, password }),
            credentials: "include",
        });

        const data = await response.json();

        if (response.ok && data.message === "Connexion réussie") {
            localStorage.setItem("isLoggedIn", "true"); // <- AJOUT ICI
            localStorage.setItem("userId", data.userId);
            navigate("/profil");
            localStorage.setItem("isLoggedIn", "true");
        } else {
            setError(data.error || "Email ou mot de passe incorrect.");
        }
    } catch (error) {
        setError("Erreur de connexion. Veuillez réessayer.");
    }
};

    return (
        <div className="connexion-container">
            <h2>Connexion</h2>
            <form onSubmit={handleSubmit}>
                <label>Email :</label>
                <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
                <label>Mot de passe :</label>
                <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
                <button type="submit">Se connecter</button>
                {error && <p className="error">{error}</p>}
            </form>
            <p>Pas encore inscrit ? <a href="/inscription">Créer un compte</a></p>
        </div>
    );
}

export default Connexion;