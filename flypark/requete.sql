-- Base de données
CREATE DATABASE flyparkmayotte;

USE flyparkmayotte;

-- Utilisateur
CREATE TABLE utilisateur (id INT NOT NULL PRIMARY KEY AUTO_INCREMENT, nom_utilisateur VARCHAR(200), prenom_utilisateur VARCHAR(200), date_naissance DATE, adresse_mail VARCHAR(200), numero_telephone VARCHAR(200), motdepasse VARCHAR(200));

-- Historique
CREATE TABLE historique (id NOT NULL PRIMARY KEY AUTO_INCREMENT, id_reservation INT FOREIGN KEY NOT NULL);

-- Liste place de parking
CREATE TABLE liste_place_parking (numero_place INT, dimension_place INT, cout_location INT, disponibilite BOOLEAN);

-- Réservation
CREATE TABLE reservation (id INT NOT NULL PRIMARY KEY AUTO_INCREMENT, id_utilisateur INT FOREIGN KEY NOT NULL, numero_reservation INT, id_place_parking INT FOREIGN KEY NOT NULL, date_reservation DATE, confirmation BOOLEAN);

-- Equipe
CREATE TABLE equipe (id INT NOT NULL PRIMARY KEY AUTO_INCREMENT, nom VARCHAR(200), prenom VARCHAR(200), poste VARCHAR(255));

CREATE TABLE services (id INT NOT NULL PRIMARY KEY AUTO_INCREMENT, services VARCHAR(200), );