import React, { useState, useEffect }from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { SessionProvider } from "../context/SessionContext";

import Accueil from './Accueil';
import Reservation from './Reservation'; 
import Services from './Services';
import APropos from './Apropos';
import Connexion from './Connexion';
import Inscription from './Inscription';
import Navbar from './Navbar';
import Footer from './Footer';
import Devis from './Devis';
import Profil from './Profil';
import ModifierProfil from "./ModifierProfil";
import { library } from '@fortawesome/fontawesome-svg-core';
import { faUser } from '@fortawesome/free-solid-svg-icons';


library.add(faUser);


function App() {

  // const [isLoggedIn, setIsLoggedIn] = useState(() => {
  //   return localStorage.getItem("isLoggedIn") === "true";
  // });

  const [isLoggedIn, setIsLoggedIn] = useState(
  localStorage.getItem("isLoggedIn") === "true"
);


  // À chaque changement de connexion dans localStorage
  useEffect(() => {
    const handleStorageChange = () => {
      setIsLoggedIn(localStorage.getItem("isLoggedIn") === "true");
    };

    window.addEventListener("storage", handleStorageChange);
    return () => window.removeEventListener("storage", handleStorageChange);
  }, []);

  return (
    <SessionProvider>
    <Router>
      <Navbar isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />      <div className="content">
        {/* Routes - affichage conditionnel des pages */}
        <Routes>
          <Route path="/" element={<Accueil />} />
          <Route path="/reservation" element={<Reservation />} />
          <Route path="/services" element={<Services />} />
          <Route path="/apropos" element={<APropos />} />
          <Route path="/connexion" element={<Connexion />} />
          <Route path="/inscription" element={<Inscription />} />
          <Route path="/devis" element={<Devis />} />
          <Route path="/profil" element={<Profil />} />
          <Route path="/modifierprofil" element={<ModifierProfil />} />
        </Routes>
      </div>
      <Footer /> {/*Le footer sera affiché en bas de toutes les pages*/}

   </Router>
   </SessionProvider>
  );
}

export default App;