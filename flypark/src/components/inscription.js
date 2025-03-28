import React, { useState } from "react";
import "../styles/inscription.css";
import { Link } from "react-router-dom";


function Inscription() {
  const [nom, setNom] = useState("");
  const [prenom, setPrenom] = useState("");
  const [email, setEmail] = useState("");
  const [date_naissance, setDateNaissance] = useState("");
  const [numero_telephone, setNumeroTelephone] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault(); // Empêche le rechargement de la page

    if (password !== confirmPassword) {
      alert("Les mots de passe ne correspondent pas !");
      return;
    }

    const userData = { nom, prenom, email, date_naissance, numero_telephone, password };

    try {
      const response = await fetch("http://127.0.0.1:5000/api/inscription", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(userData),
      });

      const data = await response.json();

      if (response.ok) {
        setMessage("Inscription réussie !");
        setNom("");
        setPrenom("");
        setEmail("");
        setDateNaissance("");
        setNumeroTelephone("");
        setPassword("");
        setConfirmPassword("");
      } else {
        setMessage(data.error || "Une erreur s'est produite.");
      }
    } catch (error) {
      console.error("Erreur :", error);
      setMessage("Erreur serveur.");
    }
  };

  return (
    <div className="inscription-container">
      <h2>Inscription</h2>
      {message && <p className="message">{message}</p>}
      <form onSubmit={handleSubmit}>
        <label>Nom :</label>
        <input type="text" value={nom} onChange={(e) => setNom(e.target.value)} required />

        <label>Prénom :</label>
        <input type="text" value={prenom} onChange={(e) => setPrenom(e.target.value)} required />

        <label>Email :</label>
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />

        <label>Date de Naissance :</label>
        <input type="date" value={date_naissance} onChange={(e) => setDateNaissance(e.target.value)} required />

        <label>Numéro de Téléphone :</label>
        <input type="number" value={numero_telephone} onChange={(e) => setNumeroTelephone(e.target.value)} required />

        <label>Mot de passe :</label>
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />

        <label>Confirmer le mot de passe :</label>
        <input type="password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} required />

        <button type="submit">S'inscrire</button>
      </form>

      <p>Déjà inscrit ? <Link to="/connexion">Se connecter</Link></p>

    </div>
  );
}

export default Inscription;