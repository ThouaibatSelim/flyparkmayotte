import React from "react";
// import { Link } from "react-router-dom";
import '../styles/navbar.css';
// import Login from "./Login";

function Navbar() {
  return (
           <nav class="navbar">
            <div class="navbar-container">
            <a href="/" class="navbar-logo">Fly Park Mayotte</a>
            <ul class="navbar-links">
            <li><a href="/">Accueil</a></li>
            <li><a href="/reservation">Réservation</a></li>
            <li><a href="/services">Services</a></li>
            <li><a href="/apropos">À propos</a></li>
            <li><a href="/login">Login</a></li>
            <li><a href="/connexion">Connexion</a></li>
            <li><a href="/inscription">Inscription</a></li>
        </ul>
      </div>
    </nav>
  )
} 

export default Navbar;
