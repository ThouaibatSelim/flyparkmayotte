import React from "react";
import '../styles/apropos.css';

// Création du composant Apropos
function Apropos() {
  return React.createElement(
    "div",
    { className: "apropos-container" },
    // Titre principal
    React.createElement("h1", null, "À Propos de Fly Park Mayotte"),

    // Section sur l'histoire du projet
    React.createElement(
      "section",
      { className: "histoire" },
      React.createElement("h2", null, "Notre Histoire"),
      React.createElement(
        "p",
        null,
        "Fly Park Mayotte est né de la nécessité d'offrir des espaces de stationnement sécurisés et adaptés aux aéronefs sur l'île de Mayotte. "
      ),
      React.createElement(
        "p",
        null,
        "Avec une équipe passionnée et expérimentée, nous proposons un service fiable pour les professionnels et les voyageurs."
      )
    ),

    // Section sur l'équipe
    React.createElement(
      "section",
      { className: "equipe" },
      React.createElement("h2", null, "Notre Équipe"),

      // Liste des membres
      React.createElement("ul", null, [
        React.createElement("li", { key: "1" }, "👩‍✈️ Directrices : Tatyana Ali Mdahoma & Thouaïbat Sélim"),
        React.createElement("li", { key: "2" }, "📞 Secrétaire : Ali Madi"),
        React.createElement("li", { key: "3" }, "📢 Chargée de communication : Fatima Boina"),
        React.createElement("li", { key: "4" }, "🛡️ Agents de sécurité : Agence SecurMaoré"),
        React.createElement("li", { key: "5" }, "🧹 Techniciens de surface : Anziz Abdou"),
        React.createElement("li", { key: "6" }, "🛰️ Gérante de la tour de contrôle : Rachida Combo"),
        React.createElement("li", { key: "7" }, "🛰️ Superviseur du Trafic Aérien au Sol : Issa Halidi"),
        React.createElement("li", { key: "8" }, "🛰️ Hotesse : Mariam Ahamada"),
        React.createElement("li", { key: "9" }, "🛰️ Steward : Nassur Inzoudine")
      ])
    )
  );
}

// Export du composant
export default Apropos;
