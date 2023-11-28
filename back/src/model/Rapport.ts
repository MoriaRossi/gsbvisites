import { User } from "../model/User";
import { Medecin } from "./Medecin";

export class Rapport {
  id: number;
  dateCreation: Date;
  motif: string;
  bilan: string;
  auteur: string;
  medecin: string;

  constructor(
    id: number,
    dateCreation: Date,
    motif: string,
    bilan: string,
    auteur: string,
    medecin: string
  ) {
    this.id = id;
    this.dateCreation = dateCreation;
    this.motif = motif;
    this.bilan = bilan;
    this.auteur = auteur;
    this.medecin = medecin;
  }
}
/*-- Create the rapport table
  CREATE TABLE rapport (
      id SERIAL PRIMARY KEY,
      dateCreation DATE NOT NULL,
      motif VARCHAR(100),
      bilan TEXT,
      visiteur_id INT,
      medecin_id INT,
      FOREIGN KEY (visiteur_id) REFERENCES visiteur(id),
      FOREIGN KEY (medecin_id) REFERENCES medecin(id)
  );  */
