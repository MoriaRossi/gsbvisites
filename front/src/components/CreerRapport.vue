
<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
    data() {
        return {
            dateVisite: '',
            motifVisite: '',
            motifs: ['Motif 1', 'Motif 2', 'Motif 3', 'Motif 4', 'Motif 5', 'Motif 6'],
            medicamentsPresentes: '',
            nbEchantillons: 0,
            bilanVisite: ''
        };
    },
    methods: {
        enregistrerVisite(): void {
            // Envoyer les données de la visite à votre API ou effectuer un traitement local
            console.log('Données de la visite :', {
                dateVisite: this.dateVisite,
                motifVisite: this.motifVisite,
                medicamentsPresentes: this.medicamentsPresentes,
                nbEchantillons: this.nbEchantillons,
                bilanVisite: this.bilanVisite
            });

            // Réinitialisation des champs après enregistrement
            this.dateVisite = '';
            this.motifVisite = '';
            this.medicamentsPresentes = '';
            this.nbEchantillons = 0;
            this.bilanVisite = '';
        }
    }
});
</script>

<template>
    <div>
        <h1 style="position: relative;
    top: -100px;">Creer rapport</h1>

        <form @submit.prevent="enregistrerVisite" style="position: relative; top: -100px">
            <div>
                <label>Date de la visite :</label>
                <input type="date" v-model="dateVisite" required />
            </div>

            <div>
                <label>Motif de la visite :</label>
                <select v-model="motifVisite" required>
                    <option value="">Sélectionnez un motif</option>
                    <option v-for="motif in motifs" :key="motif" :value="motif">{{ motif }}</option>
                </select>
            </div>

            <div>
                <label>Médicaments présentés :</label>
                <textarea v-model="medicamentsPresentes" rows="4"></textarea>
            </div>

            <div>
                <label>Nombre d'échantillons offerts :</label>
                <input type="number" v-model.number="nbEchantillons" min="0" />
            </div>

            <div>
                <label>Bilan de la visite :</label>
                <textarea v-model="bilanVisite" rows="4"></textarea>
            </div>

            <button type="submit">Enregistrer</button>
        </form>
    </div>
</template>