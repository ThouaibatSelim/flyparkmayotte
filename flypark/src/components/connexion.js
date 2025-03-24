import React, { useState } from "react"; // Importation de React et du hook useState
import "../styles/connexion.css"; // Importation du fichier CSS

// Définition du composant Connexion
function Connexion() {
  // Déclaration des états pour stocker l'email et le mot de passe
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // Fonction qui se déclenche lors de la soumission du formulaire
  const handleSubmit = function (e) {
    e.preventDefault(); // Empêche le rechargement de la page
    console.log("Connexion avec :", email, password); // Affiche les valeurs saisies dans la console
  };

  // Création de l'interface utilisateur
  return React.createElement(
    "div",
    { className: "connexion-container" }, // Conteneur principal
    React.createElement("h2", null, "Connexion"), // Titre de la page de connexion
    React.createElement(
      "form",
      { onSubmit: handleSubmit }, // Formulaire avec la fonction handleSubmit
      // Label et champ de saisie pour l'email
      React.createElement("label", null, "Email :"),
      React.createElement("input", {
        type: "email",
        value: email,
        onChange: function (e) {
          setEmail(e.target.value); // Met à jour l'état de l'email
        },
        required: true, // Champ obligatoire
      }),

      // Label et champ de saisie pour le mot de passe
      React.createElement("label", null, "Mot de passe :"),
      React.createElement("input", {
        type: "password",
        value: password,
        onChange: function (e) {
          setPassword(e.target.value); // Met à jour l'état du mot de passe
        },
        required: true, // Champ obligatoire
      }),

      // Bouton de soumission du formulaire
      React.createElement(
        "button",
        { type: "submit" },
        "Se connecter"
      )
    ),
    // Lien vers la page d'inscription
    React.createElement(
      "p",
      null,
      "Pas encore inscrit ? ",
      React.createElement("a", { href: "/inscription" }, "Créer un compte")
    )
  );
}

// Exportation du composant 
export default Connexion;