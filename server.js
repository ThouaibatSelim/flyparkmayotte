const express = require("express");
const cors = require("cors");
const database = require("./db");

const app = express();

app.use(session({
    secret: "monSecretSuperSecurisé", // Clé secrète pour signer la session
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false } // Mettre `true` en HTTPS
}));

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
    database.query("INSERT INTO utilisateur (nom_utilisateur, prenom_utilisateur, date_naissance, adresse_mail, numero_telephone, motdepasse) VALUES (?, ?, ?, ?, ?, ?)");
});

app.listen(5000, () => console.log("Serveur démarré sur http://localhost:5000"));