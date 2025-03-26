const express = require("express");
const cors = require("cors");
const database = require("./db");

const app = express();

app.use(session({
   secret: "monSecretSuperSecurisé", //Clé secrète pour signer la session
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false }  // Mettre `true` en HTTPS
}));

db.connect((err) => {
    if (err) {
      console.error("Erreur de connexion à la base de données:", err);
      process.exit(1); // Arrêter le serveur si la connexion échoue
    }
    console.log("Connexion à la base de données réussie");
  });

app.use(cors({
    origin: "http://localhost:3000", // URL du frontend
    credentials: true // Autoriser l'envoi des cookies de session
})); // Autoriser les requêtes du frontend

// Route connexion
app.post("/connexion", (req, res) => {
    const { username } = req.body;
    if (username) {
        req.session.user = { name: username };
        res.json({ message: "Connexion réussie", user: req.session.user });
    } else {
        res.status(400).json({ message: "Nom d'utilisateur requis" });
    }
});

// Route pour récupérer la session actuelle
app.get("/session", (req, res) => {
    if (req.session.user) {
        res.json({ user: req.session.user });
    } else {
        res.status(401).json({ message: "Non connecté" });
    }
});

// Route pour déconnecter
app.post("/logout", (req, res) => {
    req.session.destroy();
    res.json({ message: "Déconnexion réussie" });
});

app.use(express.json()); // Permet de traiter les JSON

// Route d'accueil
app.get("/", (req, res) => {
    res.send("Bienvenue sur mon API !");
});

// Route /api/message
app.get("/api/message", (req, res) => {
    res.json({ message: "Hello depuis le backend !" });
});

// Route API pour l'inscription
app.post("/api/inscription", (req, res) => {
    const nom = req.body.nom;
    const prenom = req.body.prenom;
    const email = req.body.email;
    const date_naissance = req.body.date_naissance;
    const numero_telephone = req.body.numero_telephone;
    const password = req.body.password;

    const sql = ("INSERT INTO utilisateur (nom_utilisateur, prenom_utilisateur, adresse_mail, date_naissance, numero_telephone, motdepasse) VALUES (?, ?, ?, ?, ?, ?)");
  
    db.query(sql, [nom, prenom, email, date_naissance, numero_telephone, password], (err, result) => {
      if (err) {
        console.error("Erreur lors de l'inscription :", err);
        return res.status(500).json({ error: "Erreur lors de l'inscription" });
      }
      res.status(201).json({ message: "Utilisateur inscrit avec succès !" });
    });
  });

app.listen(5000, () => console.log("Serveur démarré sur http://localhost:5000"));