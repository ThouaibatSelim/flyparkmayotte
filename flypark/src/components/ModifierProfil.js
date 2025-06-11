import React, { useState, useEffect } from "react";
import "../styles/modifierprofil.css";

function ModifierProfil() {
  const [nom, setNom] = useState("");
  const [prenom, setPrenom] = useState("");
  const [email, setEmail] = useState("");
  const [telephone, setTelephone] = useState("");

  const userId = localStorage.getItem("userId");


useEffect(() => {
  fetch(`http://localhost:5000/utilisateur/${userId}`)
    .then(async (response) => {
      const text = await response.text(); // récupère la réponse en texte brut
      console.log("Réponse brute :", text); // affiche-la dans la console
      return JSON.parse(text); // essaie de la parser en JSON
    })
    .then(data => {
      setNom(data.nom);
      setPrenom(data.prenom);
      setEmail(data.email);
      setTelephone(data.telephone);
    })
    .catch(error => {
      console.error("Erreur chargement du profil:", error);
    });
}, []);


  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(`http://localhost:5000/utilisateur/${userId}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
        body: JSON.stringify({ nom, prenom, email, telephone }),
      });

      if (response.ok) {
        alert("Profil mis à jour avec succès");
      } else {
        alert("Échec de la mise à jour du profil, réessayez ultérieurement");
      }
    } catch (error) {
      alert("Échec de la mise à jour du profil, réessayez ultérieurement");
    }
  };

  return (
    <div className="modifier-profil">
      <h2>Modifier mon profil</h2>
      <form onSubmit={handleSubmit}>
        <label>Nom :</label>
        <input type="text" value={nom} onChange={(e) => setNom(e.target.value)} />

        <label>Prénom :</label>
        <input type="text" value={prenom} onChange={(e) => setPrenom(e.target.value)} />

        <label>Email :</label>
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />

        <label>Téléphone :</label>
        <input type="tel" value={telephone} onChange={(e) => setTelephone(e.target.value)} />

        <button type="submit">Enregistrer</button>
      </form>
    </div>
  );
}

export default ModifierProfil;
