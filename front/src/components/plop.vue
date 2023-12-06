<script>
import { ref } from 'vue';
import Rapport from '@/chemin/vers/votre/classe/Rapport'; // Importez votre classe Rapport depuis le bon chemin
import axios from 'axios'; // Assurez-vous d'importer Axios

const nouveauRapport = ref(new Rapport()); // Créez une référence réactive à une instance vide de votre classe Rapport

const envoyerRapport = () => {
  console.log('Nouveau rapport :', nouveauRapport.value);
  
  // Envoyez cet objet via Axios à votre backend
  // Par exemple :
  axios.post('/votre/endpoint', nouveauRapport.value)
    .then(response => {
      console.log('Réponse du serveur :', response.data);
      // Faites quelque chose avec la réponse du serveur si nécessaire
    })
    .catch(error => {
      console.error('Erreur lors de l\'envoi du rapport :', error);
      // Gérez les erreurs d'envoi si nécessaire
    });
};

export {
  nouveauRapport,
  envoyerRapport
};
</script>

<template>
    <form @submit.prevent="envoyerRapport">
        <label for="id">ID :</label>
        <input type="number" v-model.number="nouveauRapport.id" id="id" required>

        <label for="dateCreation">Date de création :</label>
        <input type="date" v-model="nouveauRapport.dateCreation" id="dateCreation" required>

        <label for="motif">Motif :</label>
        <input type="text" v-model="nouveauRapport.motif" id="motif" required>

        <!-- Ajoutez d'autres champs pour les autres propriétés du rapport -->

        <button type="submit">Créer Rapport et Envoyer</button>
    </form>
</template>
  
  