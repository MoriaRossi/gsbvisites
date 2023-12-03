import { Pool, QueryResult } from "pg";
import { Rapport } from "../model/Rapport";
import pool from "../db/db";
import { Medicament } from "../model/Medicament";
import FamilleController from "./FamilleController";

export class RapportController {


  public static async getMedicamentsOffertsByRapport(id_rapport: number): Promise<Medicament | Medicament[] | {key: Medicament ; quantite: number}> {
    try {
      const query = "SELECT * FROM medicament m JOIN offrir o ON m.id = o.id_medicament WHERE o.id_rapport = $1";
      const result: QueryResult<Medicament> = await pool.query(query, [id_rapport]);
      
      const medicaments = result.rows.map(async(medicamentData)=> {
        const medicament = new Medicament(
          medicamentData.id,
          medicamentData.nomcommercial,
          medicamentData.composition,
          medicamentData.effets,
          medicamentData.contre_indications,

          
        );
        const familles = await FamilleController.getFamillesById(medicament.id);
        medicament.setFamilles(familles)          
        return medicament;
      });
      return Promise.all(medicaments)

    } catch (error) {
      console.error("Error getting medicamentsOfferts:", error);
      throw new Error("Internal Server Error");
    }
  }

  public static async createRapport(
    visiteur_id: number,
    medecin_id: number,
    date: Date,
    motif: string,
    bilan: string,
    medicamentOfferts: {key: Medicament ; quantite: number} | null
  ): Promise< Rapport | string | {medicament: Medicament ; quantite: number} | null> {
    try {
      const query =
        "INSERT INTO rapport (visiteur_id, medecin_id, dateCreation, motif, bilan) VALUES ($1, $2, $3, $4, $5) RETURNING *";
      const values = [visiteur_id, medecin_id, date, motif, bilan, medicamentOfferts];
      const result: QueryResult = await pool.query(query, values);


      // Example: Return the created Rapport object
      const newRapportData = result.rows[0];
      if (newRapportData) {
        
        const rapport = new Rapport(
          newRapportData.id,
          newRapportData.dateCreation,
          newRapportData.motif,
          newRapportData.bilan,
          newRapportData.auteur,
          newRapportData.medecin,
        );
        const medicamentOfferts = await this.getMedicamentsOffertsByRapport(rapport.id);
        rapport.setMedicamentsOfferts(newRapportData.medicamentOfferts)     

        return rapport;
      } else {
        return "Erreur lors de la création du rapport";
      }
    } catch (error) {
      console.error("Error creating rapport:", error);
      throw new Error("Internal Server Error");
    }
  }
  public static async offrirLesMedicaments(quantite: number, rapport_id: number, medicament_id: number) {
    try {

    const query = "INSERT INTO offrir (quantite, rapport_id, medicament_id) VALUES($1, $2, $3)";
    await pool.query(query);
    return "Medicaments offerts";

    } catch (error) {
      console.error("Error creating rapport:", error);
      throw new Error("Internal Server Error");
    
    }

  }

  public static async modifierRapport(motif: string, bilan: string, rapportId:number){
    const query = "UPDATE rapport SET $1, $2 WHERE rapport.id = $3 RETURNING *"
    const rapport = await pool.query(query)
    return rapport
    

  }

  
}

export default RapportController;
