import React from 'react';
import'../styles/accueil.css';
import Footer from './Footer';


const Accueil = () => {
        return (
            <div className='accueil-container'>
                <h1>Bienvenue sur Fly park Mayotte</h1>
                <p>Le stationnement aérien de confiance à Mayotte.
                Réservez dès maintenant votre place et offrez à
                votre aéronef un accueil sûr et pratique</p>

                <button className='custom-button'>Explorer</button>
            </div>
            );
        };

        
export default Accueil;       