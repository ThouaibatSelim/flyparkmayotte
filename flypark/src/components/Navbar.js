import React from "react";
import '../styles/navbar.css'; 

function Navbar() {
            return (
                <nav className="navbar">
                <h1>Fly Park Mayotte</h1>
                <ul>
                <li><a href="/">Accueil</a></li>
                <li><a href= "/reservation">Réservation</a></li>
                <li><a href= "/services">Services</a></li>
                <li><a href= "/apropos"> A Propos</a></li>
                <li><a href= "/connexion">Connexion</a></li>
                <li><a href= "/inscription"></a></li>
       </ul> 
    </nav>     
    );
}
export default Navbar; 