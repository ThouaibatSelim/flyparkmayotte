import React from 'react';
// import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Accueil from './Accueil';
import Reservation from './Reservation'; 
import Services from './Services';
import APropos from './Apropos';
import Connexion from './Connexion';
import Inscription from './Inscription';
import Navbar from './Navbar';
import Footer from './Footer';

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