import { Pool } from "pg";


// Create a Pool instance
const pool = new Pool({
  user: "postgres",
  host: "localhost",
  database: "gsbvisites-db",
  password: "gsbvisites",
  port: 5432,
});

export default pool;
