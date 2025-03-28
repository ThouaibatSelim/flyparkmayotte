import React, { useState, useEffect } from "react";
import "../styles/accueil.css";
import { useNavigate } from "react-router-dom";

function Profil() {
  const [user, setUser] = useState(null);
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    fetch("http://localhost:5000/session", {
      credentials: "include",
    })
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error("Non connecté");
        }
      })
      .then((data) => {
        setUser(data.user);
      })
      .catch((error) => {
        console.error("Erreur de session :", error);
        navigate("/connexion");
      });
  }, [navigate]);

  const openNav = () => setIsOpen(true);
  const closeNav = () => setIsOpen(false);

  if (!user) {
    return <p>Chargement...</p>;
  }

  return (
    <div className="relative">
      <button className="open-btn" onClick={openNav}>
        ☰
      </button>
      <br /> <br />

      <div id="mySidenav" className={`sidenav ${isOpen ? "open" : ""}`}>
        <a href="#" className="closebtn" onClick={closeNav}>
          &times;
        </a>
        <ol className="profilnav">
          <li>
            <strong>Profil de :</strong> {user.name}
          </li>
          <br />
          <li>
            <strong>Email :</strong> {user.email}
          </li>
          <br />
          <li>
            <strong>Mot de passe :</strong> ************
          </li>
          <br />
          <br />
          <li>
            <a href="modifierprofil">
              <strong>Modifier mon profil</strong>
            </a>
          </li>
          <li>
            <a href="/logout">
              <strong>Se déconnecter</strong>
            </a>
          </li>
        </ol>
      </div>

      <div id="main" className={`transition-all ${isOpen ? "ml-64" : "ml-0"}`}>
        <h1>Bienvenue dans votre profil {user.name} !</h1>
        <br />
        <br />
        <br />
        <br />
      </div>

      <button className="submit-btn">
        <a href="/logout">
          <strong>Se déconnecter</strong>
        </a>
      </button>
      <br />
      <br />
      <br />
      <br />
    </div>
  );
}

export default Profil;