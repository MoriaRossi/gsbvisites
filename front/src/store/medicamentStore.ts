import { defineStore } from "pinia";

import DataService from '../service/DataService';

import type Medicament from "../model/Medicament";

export const useMedicamentStore = defineStore({
    state: () => ({
        medicaments: [] as Medicament[],
    }),

    getters: {
        getMedicaments: (state) => {
            return state.medicaments;
        }
    },

    actions: {
        async getMedicament(medicaments: Medicament) {
            return DataService.getAxiosMedicament();
        }
    }
});