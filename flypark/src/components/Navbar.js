import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import "../styles/navbar.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';

function Navbar({ isLoggedIn, setIsLoggedIn }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("isLoggedIn");
    setIsLoggedIn(false);
    navigate("/"); // redirige vers la page d'accueil
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
              <li>
                <button
                  onClick={() => {
                    localStorage.removeItem("isLoggedIn");
                    setIsLoggedIn(false);
                    navigate("/");
                  }}
                  className="navbar-profile-link"
                  style={{ background: "none", border: "none", cursor: "pointer" }}
                >
                  Déconnexion
                </button>
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
