import { Medicament } from "./Medicament";

export default class Rapport {
  id: number;
  dateCreation: Date;
  motif: string;
  bilan: string;
  auteur: string;
  medecin: string;
  medicamentsOfferts!: { medicament: Medicament; quantite: number }

  constructor(
    id: number,
    dateCreation: Date,
    motif: string,
    bilan: string,
    auteur: string,
    medecin: string,
  ) {
    this.id = id;
    this.dateCreation = dateCreation;
    this.motif = motif;
    this.bilan = bilan;
    this.auteur = auteur;
    this.medecin = medecin;
  }
}