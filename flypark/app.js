//import dépendances
const express = require("express");
const fs = require("fs");
const mysql2 = require('mysql2');
const myConnection = require("express-myconnection");
const session = require("express-session");

//Appel Routes
const accueilRoutes = require("./routes/accueilR");  //accueil
const aproposRoutes = require("./routes/aproposR" );    //a propos
const inscriptionRoutes = require("./routes/inscriptionR");  //inscription
const connexionRoutes = require("./routes/connexionR");    //connexion
const servicesRoutes = require("./routes/servicesR");    //services
const reservationRoutes = require("./routes/reservationR");    //reservation

//connection base de données
const connection = {
    host : 'localhost',
    user : 'root',
    password : 'mythouaiL9222',
    port : 3306,
    database : 'flyparkmayotte'
};

//app type express
const app = express();

app.use(express.json());  // Pour les requêtes en JSON
app.use(express.urlencoded({ extended: true }));

// session
app.use(session({
    secret: "secret",
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false }  // false si pas en HTTPS
}));

// public, mysql
app.use(express.static("public"));
app.use(myConnection( mysql2, connection, "pool"));

//use routes
app.use('/', accueilRoutes);    //accueil
app.use('/', reservationRoutes);   //reservation
app.use('/', aproposRoutes);    //a propos
app.use('/', servicesRoutes);    //services
app.use('/', inscriptionRoutes);    //inscription
app.use('/', connexionRoutes);   //connexion

// export de l'application
module.exports = app;