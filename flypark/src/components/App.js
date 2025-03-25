import React from 'react';
// import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
<<<<<<< HEAD

=======
import Accueil from './Accueil';
=======
<<<<<<< HEAD
>>>>>>> 6009ce29e30c5e771a314af07ec9f224b9578679
import Accueil from './Accueil';
import Reservation from './Reservation';
import Services from './Services';
import APropos from './Apropos';
import Connexion from './Connexion';
import Inscription from './Inscription';
import Navbar from './Navbar';
import Footer from './Footer';
<<<<<<< HEAD
=======
import Devis from './Devis';
<<<<<<< HEAD
=======
=======
import Accueil from './accueil';
>>>>>>> ca0e5f18cf23355e4bf3126349cbd9f3b016676f
import Reservation from './reservation';
import Services from './services';
import APropos from './apropos';
import Connexion from './connexion';
import Inscription from './inscription';
import Navbar from './Navbar';
import Footer from './footer';
// import Layout from './layout';
>>>>>>> ab4a53a0dec3dcc722e0862412fb152645963dac
>>>>>>> b6fe6efd5746f13eeffb4e259772ae49c0bc4a29
>>>>>>> 6009ce29e30c5e771a314af07ec9f224b9578679

function App() {
  return (
    <Router>
       <Navbar />
      <div className="content">
        {/* Routes - affichage conditionnel des pages */}
        <Routes>
          <Route path="/" element={<Accueil />} />
          <Route path="/reservation" element={<Reservation />} />
          <Route path="/services" element={<Services />} />
          <Route path="/apropos" element={<APropos />} />
          <Route path="/connexion" element={<Connexion />} />
          <Route path="/inscription" element={<Inscription />} />
        </Routes>
      </div>
      <Footer /> {/*Le footer sera affiché en bas de toutes les pages*/}

   </Router>
  );
}

export default App;