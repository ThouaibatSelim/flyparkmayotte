const express = require("express");

const authController = require("../controllers/connexion");

const router = express.Router();

router.get("/connexion", connexionController.loginView);
router.post("/connexion", connexionController.registerUtilisateur);


module.exports = router;