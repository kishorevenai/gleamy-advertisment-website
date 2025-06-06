import { Pool } from "pg";
export const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: {
    rejectUnauthorized: false, // Required for most managed DBs like Render
  },
});
