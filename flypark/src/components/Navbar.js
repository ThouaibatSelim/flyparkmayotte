import React from "react";
import { Link } from "react-router-dom";
import '../styles/navbar.css';

function Navbar() {
  return (
    <nav className="navbar"> 
      <Link to="/" className="navbar-logo">Fly Park Mayotte</Link>
      <div className="navbar-links">
        <Link to="/">Accueil</Link>
        <Link to="/reservation">Réservation</Link>
        <Link to="/services">Services</Link>
        <Link to="/apropos">À propos</Link>
        <Link to="/connexion">Connexion</Link>
        <Link to="/inscription">Inscription</Link>
      </div>
    </nav>
  );
}

export default Navbar;
