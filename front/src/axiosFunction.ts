// axiosFunction.ts

import axios, { AxiosResponse } from 'axios';

export async function getMedicaments(): Promise<AxiosResponse> {
  try {
    const response = await axios.get('http://localhost:3000/medicament/medicaments');
    return response;
  } catch (error) {
    throw new Error(`Erreur lors de la récupération des données du backend : ${error}`);
  }
}

export async function postMedicament(): Promise<AxiosResponse> {
  try {
    const response = await axios.get('http://localhost:3000/rapport/rapport');
    return response;
  } catch (error) {
    throw new Error(`Erreur lors de la récupération des données du backend : ${error}`);
  }
}
