import { Pool, QueryResult } from "pg";
import { Famille } from "../model/Famille";
import pool from "../db/db";

export class FamilleController {
  static pool: Pool = pool;

  public static async getFamilles(): Promise<Famille[] | null> {
    try {
      const query = "SELECT * FROM f.famille";
      const result: QueryResult<Famille> = await FamilleController.pool.query(query);

      if (result.rows.length > 0) {
        const familles: Famille[] = result.rows.map((famille) => {
          return new Famille(famille.id, famille.libele);
        });

        return familles;
      } else {
        return null;
      }
    } catch (error) {
      console.error("Error fetching famille:", error);
      throw new Error("Internal Server Error");
    }
  }

  public static async getFamillesById(id: number): Promise<Famille[] | null > {
    try {
      const query = "SELECT f.id, f.libele FROM famille f JOIN appartenir a ON f.id = a.id_famille WHERE a.id_medicament = $1";
      const result: QueryResult<Famille> = await FamilleController.pool.query(query, [id]);
  
      if (result.rows.length > 0) {
        const familles: Famille[] = result.rows.map((famille) => {
          return new Famille(famille.id, famille.libele);
        });
  
        return familles ; 
      } else {
        return null ;
      }
    } catch (error) {
      console.error("Error fetching famille:", error);
      throw new Error("Internal Server Error");
    }
  }
  
}

export default FamilleController;
