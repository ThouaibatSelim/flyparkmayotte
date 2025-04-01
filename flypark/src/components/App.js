import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Accueil from './Accueil';
import Reservation from './Reservation'; 
import Services from './Services';
import APropos from './Apropos';
import Connexion from './Connexion';
import Inscription from './Inscription';
import Navbar from './Navbar';
import Footer from './Footer';
import Devis from './Devis';
import Historique from './Historique'; // Ajoute une page Historique

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <Router>
      {/* Navbar avec la gestion de l'authentification */}
      <Navbar isLoggedIn={isLoggedIn} />

      <div className="content">
        <Routes>
          <Route path="/" element={<Accueil />} />
          <Route path="/reservation" element={<Reservation />} />
          <Route path="/services" element={<Services />} />
          <Route path="/apropos" element={<APropos />} />
          <Route path="/connexion" element={<Connexion setIsLoggedIn={setIsLoggedIn} />} />
          <Route path="/inscription" element={<Inscription />} />
          <Route path="/devis" element={<Devis />} />
          {isLoggedIn && <Route path="/historique" element={<Historique />} />} {/* Historique uniquement si connecté */}
        </Routes>
      </div>

      <Footer />
    </Router>
  );
}

export default App;
