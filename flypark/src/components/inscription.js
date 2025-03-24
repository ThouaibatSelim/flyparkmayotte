import React, { useState } from "react"; // Importation de React et du hook useState
import "../styles/inscription.css"; // Importation du fichier CSS

// Définition du composant Inscription
function Inscription() {
  // Déclaration des états pour stocker les valeurs saisies
  const [nom, setNom] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  // Fonction qui se déclenche lors de la soumission du formulaire
  const handleSubmit = function (e) {
    e.preventDefault(); // Empêche le rechargement de la page
    if (password !== confirmPassword) {
      alert("Les mots de passe ne correspondent pas !");
      return;
    }
    console.log("Inscription avec :", nom, email, password);
  };

  // Création de l'interface utilisateur 
  return React.createElement(
    "div",
    { className: "inscription-container" }, // Conteneur principal
    React.createElement("h2", null, "Inscription"), // Titre de la page

    React.createElement(
      "form",
      { onSubmit: handleSubmit }, // Formulaire avec la fonction handleSubmit
      // Label et champ de saisie pour le nom
      React.createElement("label", null, "Nom :"),
      React.createElement("input", {
        type: "text",
        value: nom,
        onChange: function (e) {
          setNom(e.target.value);
        },
        required: true,
      }),

      // Label et champ de saisie pour l'email
      React.createElement("label", null, "Email :"),
      React.createElement("input", {
        type: "email",
        value: email,
        onChange: function (e) {
          setEmail(e.target.value);
        },
        required: true,
      }),

      // Label et champ de saisie pour le mot de passe
      React.createElement("label", null, "Mot de passe :"),
      React.createElement("input", {
        type: "password",
        value: password,
        onChange: function (e) {
          setPassword(e.target.value);
        },
        required: true,
      }),

      // Label et champ de saisie pour la confirmation du mot de passe
      React.createElement("label", null, "Confirmer le mot de passe :"),
      React.createElement("input", {
        type: "password",
        value: confirmPassword,
        onChange: function (e) {
          setConfirmPassword(e.target.value);
        },
        required: true,
      }),

      // Bouton de soumission
      React.createElement("button", { type: "submit" }, "S'inscrire")
    ),
    
    // Lien vers la page de connexion
    React.createElement(
      "p",
      null,
      "Déjà inscrit ? ",
      React.createElement("a", { href: "/connexion" }, "Se connecter")
    )
  );
}

// Exportation du composant 
export default Inscription;
