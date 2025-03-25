import React from 'react';
// import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Accueil from './accueil';
import Reservation from './reservation';
import Services from './services';
import APropos from './apropos';
import Connexion from './connexion';
import Inscription from './inscription';
import Navbar from './Navbar';
import Footer from './footer';
// import Layout from './layout';

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