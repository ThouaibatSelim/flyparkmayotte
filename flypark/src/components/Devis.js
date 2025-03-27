import React, { useState } from "react";
import "../styles/devis.css"; // Import du fichier CSS

// Liste des services disponibles
const servicesList = [
  "Location de parking",
  "Entretien d'aéronef",
  "Service aux passagers",
  "Assistance au sol",
  "Ravitaillement en carburant",
];

const Devis = () => {
  // États pour stocker les informations du formulaire
  const [nom, setNom] = useState("");
  const [email, setEmail] = useState("");
  const [selectedServices, setSelectedServices] = useState([]);
  const [message, setMessage] = useState("");

  // Gère la sélection/déselection des services
  const handleCheckboxChange = (service) => {
    setSelectedServices((prev) =>
      prev.includes(service)
        ? prev.filter((s) => s !== service) // Supprime si déjà sélectionné
        : [...prev, service] // Ajoute sinon
    );
  };

  // Fonction exécutée lors de la soumission du formulaire
  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Devis demandé pour ${selectedServices.join(", ")} par ${nom}`);
  };

  return (
    <div className="devis-container">
      <h2>Demande de devis</h2>

      {/* Formulaire pour saisir les informations */}
      <form onSubmit={handleSubmit} className="devis-form">
        <label>Nom :</label>
        <input type="text" value={nom} onChange={(e) => setNom(e.target.value)} required />

        <label>Email :</label>
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />

        <label>Services souhaités :</label>
        <div className="checkbox-group">
          {servicesList.map((service, index) => (
            <div key={index} className="checkbox-item">
              <input
                type="checkbox"
                value={service}
                checked={selectedServices.includes(service)}
                onChange={() => handleCheckboxChange(service)}
              />
              <span>{service}</span>
            </div>
          ))}
        </div>

        <label>Message :</label>
        <textarea value={message} onChange={(e) => setMessage(e.target.value)} required></textarea>

        {/* Bouton de soumission */}
        <button type="submit" className="btn-envoyer">Envoyer la demande</button>
      </form>
    </div>
  );
};

export default Devis;
