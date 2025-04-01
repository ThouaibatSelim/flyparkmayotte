import React, { useState } from "react";
import "../styles/historique.css";

const Historique = () => {
  const [reservations, setReservations] = useState([
    { date: "2025-03-20", place: "20m x 30m" },
    { date: "2025-03-25", place: "25m x 35m" },
  ]);

  return (
    <div className="historique-container">
      <h2>Historique des réservations</h2>
      {reservations.length === 0 ? (
        <p>Aucune réservation effectuée.</p>
      ) : (
        <ul>
          {reservations.map((res, index) => (
            <li key={index}>
              📅 Date: {res.date} | 📍 Place: {res.place}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Historique;
