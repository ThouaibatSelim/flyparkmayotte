const mysql = require('mysql2');

// connection base de données
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'pd+12SQm',
    port: 3306,
    database: 'flyparkmayotte'
});

// si erreur retourne erreur sinon retourne le message
connection.connect((erreur) => {
    if(erreur) {
        console.log(erreur);
        return;
    }
    console.log("Connection à la base de données réussie");
});

// exporte la connection
module.exports = connection;