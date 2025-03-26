-- Base de données
CREATE DATABASE flyparkmayotte;

USE flyparkmayotte;

-- Création des tables

-- Utilisateur
CREATE TABLE utilisateur (id INT NOT NULL PRIMARY KEY AUTO_INCREMENT, nom_utilisateur VARCHAR(200), prenom_utilisateur VARCHAR(200), date_naissance DATE, adresse_mail VARCHAR(200), numero_telephone VARCHAR(200), motdepasse VARCHAR(200));

-- Liste place de parking
CREATE TABLE place_parking (id INT NOT NULL PRIMARY KEY AUTO_INCREMENT, numero_place INT, dimension_place INT, cout_location INT, disponibilite BOOLEAN);

-- Historique
CREATE TABLE historique (id INT NOT NULL AUTO_INCREMENT PRIMARY KEY, id_reservation INT NOT NULL, FOREIGN KEY (id_reservation) REFERENCES reservation(id));

-- Réservation
CREATE TABLE reservation (id INT NOT NULL PRIMARY KEY AUTO_INCREMENT, id_utilisateur INT FOREIGN KEY (id_reservation) REFERENCES utilisateur(id) NOT NULL, numero_reservation INT, id_place_parking INT FOREIGN KEY (id_place_parking) REFERENCES utilisateur(id) NOT NULL, date_reservation DATE, confirmation BOOLEAN);

-- Equipe
CREATE TABLE equipe (id INT NOT NULL PRIMARY KEY AUTO_INCREMENT, nom VARCHAR(200), prenom VARCHAR(200), poste VARCHAR(255));

-- Services
CREATE TABLE services (id INT NOT NULL PRIMARY KEY AUTO_INCREMENT, services VARCHAR(200), description VARCHAR(200));

--Contact
CREATE TABLE contact (id INT NOT NULL PRIMARY KEY AUTO_INCREMENT, numero_entreprise VARCHAR(200), adresse_mail_entreprise VARCHAR(200), adresse_postale_entreprise VARCHAR(200));


-- Remplissage des tables
