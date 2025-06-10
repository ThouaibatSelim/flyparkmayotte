import React, { useState, useEffect } from "react";
import "../styles/reservation.css"; // Import du fichier CSS

const Reservation = () => {
  const [parkings, setParkings] = useState([]);
  const [selectedParking, setSelectedParking] = useState(null);
  const [nom, setNom] = useState("");
  const [email, setEmail] = useState("");
  const [typeAvion, setTypeAvion] = useState("");
  const [date, setDate] = useState("");

  useEffect(() => {
    // Simulation de données, en vrai il faudra récupérer depuis une API
    const parkingData = [
      { id: 1, numero: "7260", dimensions: "20mx30m", prix: "50€/jour", disponibilite: "10 avril" },
      { id: 2, numero: "8982",dimensions: "25mx35m", prix: "60€/jour", disponibilite: "12 avril" },
      { id: 3, numero: "2551",dimensions: "30mx40m", prix: "75€/jour", disponibilite: "Indisponible" },
      { id: 4, numero: "9461",dimensions: "35mx45m", prix: "90€/jour", disponibilite: "15 avril" },
      { id: 5, numero: "4847",dimensions: "50mx60m", prix: "100€/jour", disponibilite: "Indisponible" },
    ];
    setParkings(parkingData);
  }, []);

  const handleReserve = (parking) => {
    setSelectedParking(parking);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Réservation confirmée pour ${nom} (${typeAvion}) le ${date} sur la place ${selectedParking.dimensions}`);
  };

  return (
    <div className="reservation-container">
      <h2>Réserver une place de parking</h2>
      <ul className="parking-list">
        {parkings.map((parking) => (
          <li key={parking.id} className="parking-item">
            N°: {parking.numero} | 📏 Dimensions: {parking.dimensions} | 💰 Prix: {parking.prix} | 📅 Disponibilité: {parking.disponibilite}
            <button className="btn-reserver" onClick={() => handleReserve(parking)}>Réserver</button>
          </li>
        ))}
      </ul>

      {selectedParking && (
        <form className="reservation-form" onSubmit={handleSubmit}>
          <h3>Réservation pour {selectedParking.numero}</h3>
          <label>Nom du pilote :</label>
          <input type="text" value={nom} onChange={(e) => setNom(e.target.value)} required />
          
          <label>Email :</label>
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
          
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
          <input type="date" value={date} onChange={(e) => setDate(e.target.value)} required />
          
          <button type="submit" className="btn-confirm">Confirmer la réservation</button>
        </form>
      )}
    </div>
  );
};

export default Reservation;
