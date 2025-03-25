import React, { useEffect, useState } from "react";
import "../styles/footer.css";

function Footer() {
  // État pour stocker l'année actuelle
  const [year, setYear] = useState(new Date().getFullYear());

  return (
    <footer className="footer">
      <ol className="contact">
        <li>
          <i className="fa-solid fa-phone"></i>
          &nbsp; <a href="tel:+262992019">0269-17-17-17</a>&nbsp;
        </li>
        <li>
          <i className="fa-solid fa-envelope"></i>
          &nbsp;<a href="mailto:contact.ts9@gmail.com">contact.flyparkmayotte@gmail.com</a>
        </li>
        <li>
          <i className="fa-solid fa-house"></i>
          &nbsp;<a href="#">7 rue Sana, 97615 Pamandzi</a>
        </li>
      </ol>
<br />
      <br />

      {/* Liens vers les réseaux sociaux */}
      <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">
        <i className="fa-brands fa-facebook"></i>
      </a>
      <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
        <i className="fa-brands fa-instagram"></i>
      </a>
      <a href="https://twitter.com/?lang=fr" target="_blank" rel="noopener noreferrer">
        <i className="fa-brands fa-x-twitter"></i>
      </a>
      <a href="https://www.youtube.com/?app=desktop&hl=FR" target="_blank" rel="noopener noreferrer">
        <i className="fa-brands fa-youtube"></i>
      </a>

      <br />
      <br />



      {/* Affichage de l'année actuelle */}
      <p className="foot">© {year} Fly Park Mayotte - Tous droits réservés</p>
    </footer>
  );
}

export default Footer;
