import React from "react";
import { Link } from "react-router-dom";
import '../styles/navbar.css'; 

function Navbar() {
            return (
                <nav className="navbar">
                    <h1>Fly Park Mayotte</h1>
                    <ul>
                        <li><link to="/accueil">Accueil</link></li>
                        <li><link to= "/reservation">Réservation</link></li>
                        <li><link to= "/services">Services</link></li>
                        <li><link to= "/apropos"> A Propos</link></li>
                        <li><link to= "/connexion">Connexion</link></li>
                        <li><link to= "/inscription">Inscription</link></li>
                    </ul> 
                </nav>     
    );
}
export default Navbar; 