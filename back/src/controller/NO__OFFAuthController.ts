import jwt from "jsonwebtoken";
import { Pool } from "pg";
import { User } from "../model/User"

const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'gsbvisites-db',
  password: 'gsbvisites',
  port: 5432,
});


export class AuthController {
  private pool: Pool;

  constructor(pool: Pool) {
    this.pool = pool;
  }

   public async authenticateUser(username: string, mdp: string) {
    try {
      const result = await pool.query('SELECT * FROM app_user WHERE username = $1 AND mdp = $2', [username, mdp]);
  
      if (result.rows.length === 0) {
        throw new Error('Authentication failed');
      } else {
        const user: User = result.rows[0];
  
        // Create a JWT
        const token: string = jwt.sign({ userId: user.id, login: user.username }, '36474d5c5x2x14d', { expiresIn: '1h' });
  
        return { token };
      }
    } catch (error) {
      console.error(error);
      throw new Error('Internal Server Error');
    }
  }
}
