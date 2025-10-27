import pg from "pg";
import dotenv from "dotenv";

dotenv.config();

const { Pool } = pg;

// Create a connection pool
const pool = new Pool({
  host: process.env.POSTGRES_HOST,
  port: process.env.POSTGRES_PORT,
  user: process.env.POSTGRES_USER,
  password: process.env.POSTGRES_PASSWORD,
  database: process.env.POSTGRES_DB,
});

// Test connection
pool.connect()
  .then(client => {
    console.log("✅ Connected to PostgreSQL successfully!");
    client.release(); // release client back to pool
  })
  .catch(err => {
    console.error("❌ PostgreSQL connection error:", err.message);
  });

export default pool;
