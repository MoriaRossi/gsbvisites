
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
        <h1 style="position: relative;">Creer rapport</h1>

        <form @submit.prevent="enregistrerVisite">
            <div class="form__group field">
                <input class="form__field" placeholder="dateDeLaVisite" name="dateDeLaVisite" type="date"
                    v-model="dateVisite" required />
                <label for="dateDeLaVisite" class="form__label">Date de la visite :</label>
            </div>

            <div class="form__group field">
                <select class="form__field" placeholder="Médicaments présentés :" name="motifDeLaVisite"
                    v-model="motifVisite" required>
                    <option class="form__field" value="">Sélectionnez un motif</option>
                    <option class="form__field" v-for="motif in motifs" :key="motif" :value="motif">{{ motif }}</option>
                </select>
                <label for="motifDeLaVisite" class="form__label">Motif de la visite :</label>
            </div>

            <div class="form__group field">
                <textarea class="form__field" placeholder="Médicaments présentés :" name="médicamentPrésentés"
                    v-model="medicamentsPresentes" rows="4"></textarea>
                <label for="médicamentPrésentés" class="form__label">Médicaments présentés :</label>
            </div>

            <div class="form__group field">
                <input type="number" class="form__field" placeholder="Nombre d'échantillons offerts" name="echantillons"
                    v-model.number="nbEchantillons" min="0" />
                <label for="echantillons" class="form__label">Nombre d'échantillons offerts :</label>
            </div>

            <div class="form__group field">
                <textarea class="form__field" placeholder="Bilan de la visit" name="bilanDeLaVisite" v-model="bilanVisite"
                    rows="4"></textarea>
                <label for="bilanDeLaVisite" class="form__label">Bilan de la visite :</label>
            </div>

            <button type="submit">Enregistrer</button>
        </form>
    </div>
</template>