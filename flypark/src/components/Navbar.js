import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/navbar.css";

function Navbar({ isLoggedIn }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        {/* Logo */}
        <a href="/" className="navbar-logo">Fly Park Mayotte</a>

        {/* Icône Burger (affichée en mobile) */}
        <div className="burger-menu" onClick={toggleMenu}>
          ☰
        </div>

        {/* Menu (s'affiche en dessous du burger quand on clique) */}
        <ul className={`navbar-links ${isOpen ? "open" : ""}`}>
          <li><Link to="/" onClick={() => setIsOpen(false)}>Accueil</Link></li>
          <li><Link to="/reservation" onClick={() => setIsOpen(false)}>Réservation</Link></li>
          <li><Link to="/services" onClick={() => setIsOpen(false)}>Services</Link></li>
          <li><Link to="/apropos" onClick={() => setIsOpen(false)}>À propos</Link></li>
          {isLoggedIn && <li><Link to="/historique" onClick={() => setIsOpen(false)}>Historique</Link></li>}
          <li><Link to="/connexion" onClick={() => setIsOpen(false)}>Connexion</Link></li>
          <li><Link to="/inscription" onClick={() => setIsOpen(false)}>Inscription</Link></li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
