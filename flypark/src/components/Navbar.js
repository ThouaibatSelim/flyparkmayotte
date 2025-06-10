import React from "react";
import '../styles/navbar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-logo">Fly Park Mayotte</Link>
        <ul className="navbar-links">
          <li><Link to="/">Accueil</Link></li>
          <li><Link to="/reservation">Réservation</Link></li>
          <li><Link to="/services">Services</Link></li>
          <li><Link to="/apropos">À propos</Link></li>
          {/* <li><Link to="/login">Login</Link></li> */}
          <li><Link to="/connexion">Connexion</Link></li>
          <li><Link to="/inscription">Inscription</Link></li>
          <li>
            <Link to="/profil" className="profile-icon-link" aria-label="Profil">
              <FontAwesomeIcon icon={faUser} style={{ cursor: 'pointer' }} />
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar;

