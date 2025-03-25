import React from "react";
import "../styles/services.css"; // Import du fichier CSS

const Services = () => {
  return (
    <div className="services-container">
      <h2>Nos Services</h2>
      <div className="services-list">
        {/* Service 1 : Location de parkings */}
        <div className="service-card">
          <h3>🚀 Location de parkings</h3>
          <p>
            Nous proposons des places de parking sécurisées pour tous types d'aéronefs,
            avec surveillance 24h/24.
          </p>
        </div>

        {/* Service 2 : Entretien des aéronefs */}
        <div className="service-card">
          <h3>🔧 Entretien des aéronefs</h3>
          <p>
            Maintenance et réparation effectuées par des professionnels pour garantir 
            la sécurité et la performance de votre avion.
          </p>
        </div>

        {/* Service 3 : Services aux passagers */}
        <div className="service-card">
          <h3>✈️ Services aux passagers</h3>
          <p>
            Assistance aux voyageurs, salons VIP, et transport privé pour une expérience confortable et fluide.
          </p>
        </div>
      </div>

      {/* Bouton pour demander un devis */}
      <div className="devis-container">
        <button className="btn-devis">Demander un devis</button>
      </div>
    </div>
  );
};

export default Services;
