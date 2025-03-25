const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors()); // Autoriser les requêtes du frontend

// Route d'accueil
app.get("/", (req, res) => {
    res.send("Bienvenue sur mon API !");
});

// Route /api/message
app.get("/api/message", (req, res) => {
    res.json({ message: "Hello depuis le backend !" });
});

app.listen(5000, () => console.log("Serveur démarré sur http://localhost:5000"));