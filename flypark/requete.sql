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
CREATE TABLE reservation (
  id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
  id_utilisateur INT NOT NULL,
  numero_reservation INT,
  id_place_parking INT NOT NULL,
  date_reservation DATE,
  confirmation BOOLEAN,
  FOREIGN KEY (id_utilisateur) REFERENCES utilisateur(id),
  FOREIGN KEY (id_place_parking) REFERENCES place_parking(id)
);

-- Equipe
CREATE TABLE equipe (id INT NOT NULL PRIMARY KEY AUTO_INCREMENT, prenom VARCHAR(200), nom VARCHAR(200), poste VARCHAR(255));

-- Services
CREATE TABLE services (id INT NOT NULL PRIMARY KEY AUTO_INCREMENT, service VARCHAR(200), description VARCHAR (500));

--Contact
CREATE TABLE contact (id INT NOT NULL PRIMARY KEY AUTO_INCREMENT, numero_entreprise VARCHAR(200), adresse_mail_entreprise VARCHAR(200), adresse_postale_entreprise VARCHAR(200));

-- Remplissage des tables

--Contact
INSERT INTO contact (numero_entreprise, adresse_mail_entreprise, adresse_postale_entreprise) VALUES ("0269171717", "contact.flyparkmayotte@gmail.com", "7 rue Sana, 97615, Pamandzi");

-- Liste place de parking
INSERT INTO place_parking (numero_place, dimension_place, cout_location, disponibilite) VALUES (07260, 2030, 50, TRUE);
INSERT INTO place_parking (numero_place, dimension_place, cout_location, disponibilite) VALUES (08982, 2535, 60, TRUE);
INSERT INTO place_parking (numero_place, dimension_place, cout_location, disponibilite) VALUES (02551, 3040, 75, FALSE);
INSERT INTO place_parking (numero_place, dimension_place, cout_location, disponibilite) VALUES (09461, 3545, 80, TRUE);
INSERT INTO place_parking (numero_place, dimension_place, cout_location, disponibilite) VALUES (04847, 5060, 100, FALSE);

-- Services
INSERT INTO services (service, description) VALUES ("Location de parkings", "Nous proposons des places de parking sécurisées pour tous types d'aéronefs, avec surveillance 24h/24.");
INSERT INTO services (service, description) VALUES ("Entretien des aéronefs", "Maintenance et réparation effectuées par des professionnels pour garantir la sécurité et la performance de votre avion.");
INSERT INTO services (service, description) VALUES ("Services aux passagers", "Assistance aux voyageurs, salons VIP, et transport privé pour une expérience confortable et fluide.");

-- Equipe
INSERT INTO equipe (prenom, nom, poste) VALUES ("Tatyana", "Ali Mdahoma", "Directrice");
INSERT INTO equipe (prenom, nom, poste) VALUES ("Thouaïbat", "Sélim", "Directrice");
INSERT INTO equipe (prenom, nom, poste) VALUES ("Ali", "Madi", "Secrétaire");
INSERT INTO equipe (prenom, nom, poste) VALUES ("Fatima", "Boina", "Chargée de communication");
INSERT INTO equipe (prenom, nom, poste) VALUES ("Agence", "SecurMaoré", "Agents de sécurité");
INSERT INTO equipe (prenom, nom, poste) VALUES ("Anziz", "Abdou", "Technicien de surface");
INSERT INTO equipe (prenom, nom, poste) VALUES ("Rachida", "Combo", "Gérante de la tour de contrôle");
INSERT INTO equipe (prenom, nom, poste) VALUES ("Mariam", "Ahamada", "Hotesse");
INSERT INTO equipe (prenom, nom, poste) VALUES ("Nassur", "Inzoudine", "Steward");