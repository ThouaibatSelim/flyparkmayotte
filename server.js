const express = require("express");
const session = require("express-session");
const cors = require("cors");
const bcrypt = require("bcrypt");
const database = require("./db");

const app = express();

app.use( cors({
    origin: "http://localhost:3000", // URL frontend
    credentials: true,
  })
);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(
  session({
    secret: "monSecretSuperSecurisé",
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false }, // Mettre `true` en production (HTTPS)
  })
);


database.connect((err) => {
  if (err) {
    console.error("Erreur de connexion à la base de données:", err);
    process.exit(1);
  }
  console.log("Connexion à la base de données réussie");
});



app.post("/connexion", async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({ error: "Email et mot de passe requis" });
  }

  const sql = "SELECT * FROM utilisateur WHERE adresse_mail = ?";
  database.query(sql, [email], async (err, results) => {
    if (err) {
      console.error("Erreur lors de la connexion :", err);
      return res.status(500).json({ error: "Erreur serveur" });
    }

    if (results.length === 0) {
      return res.status(401).json({ error: "Utilisateur non trouvé" });
    }

    const user = results[0];
    const isMatch = await bcrypt.compare(password, user.motdepasse);

    if (!isMatch) {
      return res.status(401).json({ error: "Mot de passe incorrect" });
    }

    req.session.user = { 
      id: user.id, 
      nom: user.nom_utilisateur, 
      prenom: user.prenom_utilisateur,
      email: user.adresse_mail,
      numero: user.numero_telephone
    };

    console.log("Session sauvegardée :", req.session.user);

  res.status(200).json({ message: "Connexion réussie", user: req.session.user });

  });
});

app.get("/session", (req, res) => {
  if (req.session.user) {
    res.json({ user: req.session.user });
  } else {
    res.status(401).json({ message: "Non connecté" });
  }
});

app.post("/logout", (req, res) => {
  req.session.destroy();
  res.json({ message: "Déconnexion réussie" });
});

app.get("/", (req, res) => {
  res.send("Bienvenue sur mon API !");
});

app.get("/api/message", (req, res) => {
  res.json({ message: "Hello depuis le backend !" });
});

app.post("/api/inscription", async (req, res) => {
  console.log("Données reçues :", req.body);
  const nom = req.body.nom;
  const prenom = req.body.prenom;
  const email = req.body.email;
  const date_naissance = req.body.date_naissance;
  const numero_telephone = req.body.numero_telephone;
  const password = req.body.password;

  if (!nom || !prenom || !email || !date_naissance || !numero_telephone || !password) {
    return res.status(400).json({ error: "Tous les champs sont requis !" });
  }

  try {
    const hashedPassword = await bcrypt.hash(password, 10);
    const sql =
      "INSERT INTO utilisateur (nom_utilisateur, prenom_utilisateur, adresse_mail, date_naissance, numero_telephone, motdepasse) VALUES (?, ?, ?, ?, ?, ?)";

    database.query(
      sql,
      [nom, prenom, email, date_naissance, numero_telephone, hashedPassword],
      (err, result) => {
        if (err) {
          console.error("Erreur lors de l'inscription :", err);
          return res.status(500).json({ error: "Erreur lors de l'inscription" });
        }
        res.status(201).json({ message: "Utilisateur inscrit avec succès !" });
      }
    );
  } catch (error) {
    console.error("Erreur lors du hachage du mot de passe :", error);
    res.status(500).json({ error: "Erreur serveur" });
  }


  
});

app.get("/utilisateur/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const [result] = await db.query("SELECT * FROM utilisateurs WHERE id = ?", [id]);
    res.json(result[0]);
  } catch (err) {
    res.status(500).json({ error: "Erreur serveur" });
  }
});

app.put("/modifier-profil", (req, res) => {
  const userId = req.session.userId;
  const { nom, prenom, email, telephone, } = req.body;

  connection.query(
    "UPDATE utilisateurs SET nom_utilisateur = ?, prenom_utilisateur = ?, adresse_mail = ?, numero_telephone = ? WHERE id = ?",
    [nom, prenom, email, telephone, userId],
    (err, results) => {
      if (err) return res.status(500).json({ error: "Erreur de mise à jour" });
      res.json({ message: "Profil mis à jour avec succès" });
    }
  );
});




app.listen(5000, () => console.log("Serveur démarré sur http://localhost:5000"));