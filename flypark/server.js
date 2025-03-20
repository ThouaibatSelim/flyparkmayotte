//http
const http = require('http');

const app = require("./app.js");

// require("dotenv").config();

//Création du serveur
const server = http.createServer(app);

// function numPort() {
//   let port;
//   if (process.env.STATUS === 'developpement') { 
//     port = process.env.DEV_PORT;
//   } else {
//     port = process.env.PROD_PORT;
//   }
//   return port;
// };

const port = 3000;

//date et heure
const date = new Date;
let jour = date.toLocaleDateString();
let heure = date.toLocaleTimeString();


//écoute du port 3000
server.listen(port, () => {
    console.log(`Le serveur est au port : ${port}, le ${jour}, à ${heure}`);
  });