const express = require('express');
const cors = require('cors');
const mysql = require('mysql2');
const path = require('path'); 
const app = express();

app.use(cors());
app.use(express.json());

const pool = mysql.createPool({
  user: 'root',
  host: '127.0.0.1',
  database: 'GSBVisit',
  password: 'root',
  port: 3306,
});

app.use(express.static('public'));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'connexion.html'));
});


// Test de connexion à la base de données
pool.query('SELECT NOW()', function (error, results, fields) {
    if (error) {
      throw error; 
    }
    
    console.log('Date et heure actuelles:', results[0].now); 
  });
  

/* POST */

app.post('/user', (req, res) => {
  const { username, password } = req.body;

  pool.query('SELECT * FROM app_user WHERE username = ? AND mdp = ?', [username, password], (error, results, fields) => {
      if (error) {
          console.error(error);
          return res.status(500).send('Erreur serveur');
      }

      if (results.length > 0) {
          res.json({ success: true, user: results[0] });
      } else {
          res.status(401).json({ success: false, message: 'Identifiants incorrects' });
      }
  });
});

app.post('/ajoutUser', (req, res) => {
  // Récupérer les données du formulaire à partir du corps de la requête
  const { nom, prenom, user_type, username, mdp, adresse, email } = req.body;

  // Préparer la commande SQL pour insérer les données
  const query = 'INSERT INTO app_user (nom, prenom, user_type, username, mdp, adresse, email) VALUES (?, ?, ?, ?, ?, ?, ?)';

  // Exécuter la commande SQL avec les valeurs fournies
  pool.query(query, [nom, prenom, user_type, username, mdp, adresse, email], (error, results, fields) => {
      if (error) {
          console.error('Erreur lors de l’ajout de l’utilisateur:', error);
          return res.status(500).send('Erreur lors de l’ajout de l’utilisateur');
      }
      // Si l'insertion est réussie, envoyer une réponse positive
      res.status(201).send('Utilisateur ajouté avec succès');
  });
});

/* GET */

app.get('/visiteur', (req, res) => {
  pool.query('SELECT * FROM app_user', (error, results, fields) => {
      if (error) {
          console.error(error);
          return res.status(500).send('Erreur serveur');
      }
      res.json(results); 
  });
});

app.get('/medecin', (req, res) => {
  pool.query('SELECT app_user.nom, app_user.prenom, medecin.specialite, medecin.departement FROM medecin INNER JOIN app_user ON medecin.user_id = app_user.id;', (error, results, fields) => {
      if (error) {
          console.error(error);
          return res.status(500).send('Erreur serveur');
      }
      res.json(results); 
  });
});

app.get('/medicament', (req, res) => {
  pool.query('SELECT app_user.nom, app_user.prenom, medecin.specialite, medecin.departement FROM medecin INNER JOIN app_user ON medecin.user_id = app_user.id;', (error, results, fields) => {
      if (error) {
          console.error(error);
          return res.status(500).send('Erreur serveur');
      }
      res.json(results); 
  });
});



const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Serveur en écoute sur le port ${PORT}`);
});
