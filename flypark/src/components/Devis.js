import React, { useState } from "react";
import "../styles/devis.css"; // Import du fichier CSS

// Composant Devis pour la demande de devis des services
const Devis = () => {
  // États pour stocker les informations du formulaire
  const [nom, setNom] = useState("");
  const [email, setEmail] = useState("");
  const [service, setService] = useState("");
  const [message, setMessage] = useState("");

  // Fonction exécutée lors de la soumission du formulaire
  const handleSubmit = (e) => {
    e.preventDefault(); // Empêche le rechargement de la page
    alert(`Devis demandé pour ${service} par ${nom}`);
  };

  return (
    <div className="devis-container">
      <h2>Demande de devis</h2>

      {/* Formulaire pour saisir les informations */}
      <form onSubmit={handleSubmit} className="devis-form">
        <label>Nom :</label>
        <input
          type="text"
          value={nom}
          onChange={(e) => setNom(e.target.value)}
          required
        />

        <label>Email :</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <label>Service souhaité :</label>
        <select value={service} onChange={(e) => setService(e.target.value)} required>
          <option value="">Sélectionner un service</option>
          <option value="Location de parking">Location de parking</option>
          <option value="Entretien d'aéronef">Entretien d'aéronef</option>
          <option value="Service aux passagers">Service aux passagers</option>
        </select>

        <label>Message :</label>
        <textarea
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          required
        ></textarea>

        {/* Bouton de soumission */}
        <button type="submit" className="btn-envoyer">Envoyer la demande</button>
      </form>
    </div>
  );
};

export default Devis;
