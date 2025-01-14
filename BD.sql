create database GSBVisit;
use GSBVisit;

select * from app_user;
SELECT * FROM app_user WHERE username = 'jose.mourinho' AND mdp = 'gsbvisites';

select * from medecin;
select * from medicament;

SELECT app_user.nom, app_user.prenom, medecin.specialite, medecin.departement 
FROM medecin
INNER JOIN app_user ON medecin.user_id = app_user.id;

drop table app_user;


-- Create the user table
CREATE TABLE app_user (
    id SERIAL PRIMARY KEY,
    nom VARCHAR(50) NOT NULL,
    user_type ENUM('visiteur', 'medecin'),
    prenom VARCHAR(50) NOT NULL,
    username VARCHAR(32) NOT NULL,
    mdp VARCHAR(32),
    adresse TEXT,
    email VARCHAR(100),
    UNIQUE (email)
);


-- Create the medecin table
CREATE TABLE medecin (
    id SERIAL PRIMARY KEY,
    user_id BIGINT UNSIGNED,
    specialite VARCHAR(40),
    departement VARCHAR(25),
    UNIQUE (user_id),
    FOREIGN KEY (user_id) REFERENCES app_user(id)
);



-- Create the visiteur table for users without medecin_id
CREATE TABLE visiteur (
    id SERIAL PRIMARY KEY,
    user_id BIGINT UNSIGNED,
    date_embauche DATE,
    UNIQUE (user_id),
    FOREIGN KEY (user_id) REFERENCES app_user(id)    
);


-- Create the medicament table
CREATE TABLE medicament (
    id SERIAL PRIMARY KEY,
    nomCommercial VARCHAR(20) NOT NULL,
    composition TEXT,
    effets TEXT,
    contre_indications TEXT
    -- Add other columns necessary for the medicament table
);

-- Create the famille table
CREATE TABLE famille (
    id SERIAL PRIMARY KEY,
    libele VARCHAR(35)
);

-- Create the appartenir table
CREATE TABLE appartenir (
    id_medicament INT,
    id_famille INT,
    PRIMARY KEY (id_medicament, id_famille),
    FOREIGN KEY (id_medicament) REFERENCES medicament(id),
    FOREIGN KEY (id_famille) REFERENCES famille(id)
);

-- Create the rapport table
CREATE TABLE rapport (
    id SERIAL PRIMARY KEY,
    dateCreation DATE NOT NULL,
    motif VARCHAR(100),
    bilan TEXT,
    visiteur_id INT,
    medecin_id INT,
    FOREIGN KEY (visiteur_id) REFERENCES visiteur(id),
    FOREIGN KEY (medecin_id) REFERENCES medecin(id)
);

-- Create the offrir table
CREATE TABLE offrir (
    id SERIAL PRIMARY KEY,
    quantite INT NOT NULL,
    rapport_id INT,
    medicament_id INT,
    UNIQUE (rapport_id, medicament_id),
    FOREIGN KEY (rapport_id) REFERENCES rapport(id),
    FOREIGN KEY (medicament_id) REFERENCES medicament(id)
);


-- Insertion des valeurs fictives dans la table app_user pour les visiteurs et les médecins
INSERT INTO app_user (nom, prenom, user_type, username, mdp, adresse, email) VALUES
  ('Mourinho', 'Jose', 'visiteur', 'jose.mourinho', 'gsbvisites', '123 Rue Médecin', 'Mourinho.Jose@exemple.com'),
  ('Tuchel', 'Thomas', 'medecin', 'thomas.tuchel', NULL, '456 Rue Santé', 'Thomas.Tuchel@exemple.com');

INSERT INTO medecin (user_id, specialite, departement) VALUES
  (2, 'Orthopédie', 'Seine-et-Marne');

INSERT INTO visiteur (user_id, date_embauche) VALUES
  (1, '2022-01-01');

-- Insertion des valeurs fictives dans la table medicament
INSERT INTO medicament (nomCommercial, composition, effets, contre_indications) VALUES
  ('Doliprane', 'Paracetamol', 'Soulage les douleurs', 'Lésions au foie'),
  ('Advil', 'Ibuprofene', 'Soulage les douleurs et réduit les inflammations', 'Lésions estomac');

-- Insertion des valeurs fictives dans la table famille
INSERT INTO famille (libele) VALUES
  ('Antalgique'),
  ('Anti-inflammatoire non-stéroidiens');

-- Insertion des valeurs fictives dans la table appartenir
INSERT INTO appartenir (id_medicament, id_famille) VALUES 
    (1, 1),
    (2, 2);

-- Insertion des valeurs fictives dans la table rapport
INSERT INTO rapport (dateCreation, motif, bilan, visiteur_id, medecin_id) VALUES
  ('2022-03-01', 'Présentation', 'Accueil chaleureux zinzin', 1, 1),
  ('2022-05-01', 'Rappel', 'Intérêt pour Doliprane', 1, 1);

-- Insertion des valeurs fictives dans la table offrir
INSERT INTO offrir (quantite, rapport_id, medicament_id) VALUES
  (10, 1, 1),
  (5, 2, 2);