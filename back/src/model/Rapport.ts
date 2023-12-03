import RapportController from "../controller/RapportController";
import { User } from "../model/User";
import { Medecin } from "./Medecin";
import { Medicament } from "./Medicament";

export class Rapport {
  id: number;
  dateCreation: Date;
  motif: string;
  bilan: string;
  auteur: string;
  medecin: string;
  medicamentsOfferts!: {medicament: Medicament ; quantite: number}

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

  public getMedicamentsOfferts(rapport_id: number) {
    return RapportController.getMedicamentsOffertsByRapport(rapport_id)

  }

  public setMedicamentsOfferts(medicamentsOfferts: {medicament: Medicament ; quantite: number}) {

    this.medicamentsOfferts = medicamentsOfferts
    
    


  }

  public async offrirMedicament(quantite: number, rapport_id: number, medicament_id: number) {
    return RapportController.offrirLesMedicaments


  }
}

