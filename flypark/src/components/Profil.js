import React, { useState, useEffect } from "react";
import "../styles/profil.css";
import { useNavigate, Link } from "react-router-dom";

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
      setUser(data.user); // ✅ Ici
      console.log("User reçu :", data.user);
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
      <br></br>
      <br></br>
      <button className="open-btn" onClick={openNav} aria-label="Ouvrir la navigation">
        ☰
      </button>
      <br /> <br />

      <div id="mySidenav" className={`sidenav ${isOpen ? "open" : ""}`}>
        <button
          className="closebtn"
          onClick={closeNav}
          aria-label="Fermer la navigation"
          style={{ background: "none", border: "none", fontSize: "2rem", cursor: "pointer" }}
        >
          &times;
        </button>
        <ol className="profilnav">
          <li>
            <strong>Profil de : &nbsp; </strong> {user.prenom} {user.nom}
          </li>
          <br />
          <li>
            <strong>Email : &nbsp;</strong> {user.email}
          </li>
          <br />
          <li>
            <strong>Mot de passe : &nbsp; </strong> ************
          </li>
          <br />
          <br />
          <li>
            <Link to="/modifierprofil">
              <strong>Modifier mon profil</strong>
            </Link>
          </li>
          <li>
            <Link to="/logout">
              <strong>Se déconnecter</strong>
            </Link>
          </li>
        </ol>
      </div>

      <div id="main" className={`transition-all ${isOpen ? "ml-64" : "ml-0"}`}>
        <h1 id="bienvenue">
          Bienvenue dans votre profil {user.prenom} {user.nom} !
        </h1>
        <br />
        <br />
        <br />
        <br />
      </div>

      <button className="submit-btn">
        <Link to="/logout" style={{ color: "inherit", textDecoration: "none" }}>
          <strong>Se déconnecter</strong>
        </Link>
      </button>
      <br />
      <br />
      <br />
      <br />
    </div>
  );
}

export default Profil;
