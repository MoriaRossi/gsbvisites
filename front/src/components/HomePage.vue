<script setup lang="ts">
import { useRouter } from 'vue-router';
import { getMedicaments } from '../axiosFunction';

const router = useRouter();

function goToGererRapports() {
  router.push('/GererRapports');
}

async function testAxios() {
  console.log("fonction axios");
  try {
    const response = await getMedicaments();
    console.log('Données reçues du backend :', response.data);
    // Utilisez les données dans votre fonction ou retournez-les si nécessaire
    return response.data;
  } catch (error: any) { // Spécifiez le type 'any' ou le type approprié
    console.error('Erreur :', error.message);
    // Gérez les erreurs comme vous le souhaitez
    throw error;
  }
}


</script>

<template>
  <div>
    <h1 style="position: relative; top: -150px;">Home Page</h1>
    <button class="button" @click="goToGererRapports" style="position:relative; top: -120px; left: 120px;">Gerer rapports
    </button>
    <button @click="testAxios"> test axios</button>

  </div>
</template>