import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import "../styles/navbar.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';

function Navbar({ isLoggedIn }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-logo">
          Fly Park Mayotte
        </Link>

        <div className="burger" onClick={toggleMenu}>
          <div></div>
          <div></div>
          <div></div>
        </div>

        <ul className={`navbar-links ${isOpen ? "show" : ""}`}>
          <li><Link to="/">Accueil</Link></li>
          <li><Link to="/services">Services</Link></li>
          <li><Link to="/reservation">Réservation</Link></li>
          <li><Link to="/devis">Devis</Link></li>
          <li><Link to="/apropos">À propos</Link></li>
          {isLoggedIn ? (
            <>
          <li>
            <Link to="/profil" className="navbar-profile-link">
              <FontAwesomeIcon icon={faUser} /> Profil
            </Link>
          </li>
            </>
          ) : (
            <>
              <li><Link to="/connexion">Connexion</Link></li>
              <li><Link to="/inscription">Inscription</Link></li>
            </>
          )}
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
