import Navbar from './Navbar';
// import Accueil from './accueil';
// import logo from '../logo.svg'
// import '../styles/App.css';

// function App() {
//   return ( 
//       <div>
//           <Navbar />
    
          
          
        
//       </div>
      
    
      
      
//       );
// };

import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

function Accueil() {
    return (<Accueil/>);
}

function Apropos() {
    return <h1>À propos</h1>;
}

function App() {
    return (
        <Router>
          <div>
            <Navbar />
            </div>
            <Routes>
                <Route path="/accueil" element={<Accueil />} />
                <Route path="/about" element={<Apropos />} />
                {/* <Route path="/accueil" element={<Reservation />} />
                <Route path="/accueil" element={<Services />} />
                <Route path="/accueil" element={<Connexion />} />
                <Route path="/accueil" element={<Inscription />} /> */}

            </Routes>
        </Router>
    );
}

export default App;