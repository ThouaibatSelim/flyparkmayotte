import React, { useState } from "react";
import "../styles/reservation.css"; // Import du fichier CSS

const Reservation = () => {
  // États pour gérer les informations du formulaire
  const [nom, setNom] = useState("");
  const [email, setEmail] = useState("");
  const [typeAvion, setTypeAvion] = useState("");
  const [date, setDate] = useState("");

  // Fonction pour soumettre le formulaire
  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Réservation confirmée pour ${nom} (${typeAvion}) le ${date}`);
  };

  return (
    <div className="reservation-container">
      <h2>Réserver une place de parking</h2>
      <form onSubmit={handleSubmit}>
        <label>Nom du pilote :</label>
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

        <label>Type d'aéronef :</label>
        <select value={typeAvion} onChange={(e) => setTypeAvion(e.target.value)} required>
          <option value="">Sélectionner un type</option>
          <option value="Petit avion">Petit avion (Cessna 172, Piper PA-28)</option>
          <option value="Avion militaire">Avion militaire (F-16, Rafale)</option>
          <option value="Moyen-courrier">Avion moyen-courrier (A320, B737)</option>
          <option value="Long-courrier">Avion long-courrier (B777, A350)</option>
          <option value="Très gros porteur">Très gros porteur (A380, B747)</option>
        </select>

        <label>Date de réservation :</label>
        <input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          required
        />

        <button type="submit">Réserver</button>
      </form>
    </div>
  );
};

export default Reservation;
