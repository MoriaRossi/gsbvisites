// UserController.ts
import { Pool, QueryResult } from 'pg';
import { User } from '../model/User';
import pool from '../db'; // Import the pool from the dbConfig file

export class UserController {
  private pool: Pool;

  constructor(pool: Pool) {
    this.pool = pool; // Assign the parameter to the class property
  }

  public async getUser(username: string, mdp: string): Promise<User | null> {
    try {
      const query = 'SELECT * FROM app_user WHERE username = $1 AND mdp = $2';
      const result: QueryResult = await this.pool.query(query, [username, mdp]);

      if (result.rows.length > 0) {
        const userData = result.rows[0];
        const user: User = new User(
          userData.id,
          userData.nom,
          userData.prenom,
          userData.user_type,
          userData.username,
          userData.mdp,
          userData.adresse,
          userData.email
        );
        return user;
      } else {
        return null;
      }
    } catch (error) {
      console.error('Error fetching user by ID:', error);
      throw new Error('Internal Server Error');
    }
  }
}

export default UserController;
