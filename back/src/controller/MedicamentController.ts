import { Request, Response } from "express";
import { Pool, QueryResult } from "pg";
import pool from "../db/db";
import { Medicament } from "../model/Medicament";
import FamilleController from "./FamilleController";
import { Famille } from "../model/Famille";

export class MedicamentController {
  public static async getMedicamentById(
    id: number
  ): Promise<Medicament | null> {
    try {
      const query = "SELECT * FROM medicament WHERE id = $1";
      const result: QueryResult = await pool.query(query, [id]);

      if (result.rows.length > 0) {
        const medicamentData = result.rows[0];
        const familles = await FamilleController.getFamillesById(medicamentData.id);

        const medicament = new Medicament(
          medicamentData.id,
          medicamentData.nomcommercial,
          medicamentData.composition,
          medicamentData.effets,
          medicamentData.contre_indications,
        );
        medicament.setFamilles(familles)
        return medicament;
      }

      return null;
    } catch (error) {
      console.error("Error in getMedicamentById:", error);
      throw new Error("Internal Server Error");
    }
  }

  public static async getLesMedicaments(): Promise<Medicament[] | null> {
    try {
      const query = "SELECT * FROM medicament";
      const result: QueryResult = await pool.query(query);

      if (result.rows.length > 0) {
        const medicaments = result.rows.map(async(medicamentData) => {
          

          const medicament = new Medicament(
            medicamentData.id,
            medicamentData.nomcommercial,
            medicamentData.composition,
            medicamentData.effets,
            medicamentData.contre_indications,

            
          );
          const familles = await FamilleController.getFamillesById(medicamentData.id);
          medicament.setFamilles(familles)          
          return medicament;
        });
      return Promise.all(medicaments)

      } else {
        throw new Error("No medicaments found");
      }
    } catch (error) {
      console.error("Error in getLesMedicaments:", error);
      throw new Error("Internal Server Error");
    }
  }
}
