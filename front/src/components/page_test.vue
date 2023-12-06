<script setup lang="ts">
import { getMedicaments } from '../axiosFunction';
import { ref } from 'vue';
import Rapport from '@/model/Rapport';

import { useMedicamentStore } from "@/store/medicamentStore";

const nouveauRapport = ref<Rapport | null>(null);

const medicamentStore = useMedicamentStore();

function getMedoc() {
    const medoc = medicamentStore.getMedicaments();
    console.log(medoc);
    
}

async function postMedoc() {
    console.log("fonction axios");
    try {
        const response = await getMedicaments();
        console.log('Données reçues du backend :', response.data);
        return response.data;
    } catch (error: any) {
        console.error('Erreur :', error.message);
        throw error;
    }
}



</script>


<template>
    <div>
        <button class="button" @click="getMedoc"> Get medoc</button>
<!--
        <form @submit.prevent="envoyerRapport">
            <label for="id">ID :</label>
            <input type="number" v-model.number="nouveauRapport.id" id="id" required>

            <label for="dateCreation">Date de création :</label>
            <input type="date" v-model="nouveauRapport.dateCreation" id="dateCreation" required>

            <label for="motif">Motif :</label>
            <input type="text" v-model="nouveauRapport.motif" id="motif" required>

            <label for="bilan">Bilan :</label>
            <input type="text" v-model="nouveauRapport.bilan" id="bilan" required>

            <label for="auteur">Auteur :</label>
            <input type="text" v-model="nouveauRapport.auteur" id="auteur" required>

            <label for="medecin">Medecin :</label>
            <input type="text" v-model="nouveauRapport.medecin" id="medecin" required>
             Ajoutez d'autres champs pour les autres propriétés du rapport 

            <button type="submit">Créer Rapport et Envoyer</button>
        </form>-->
    </div>
</template>