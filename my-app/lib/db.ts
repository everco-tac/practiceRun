// lib/db.ts
import { Pool } from 'pg';

const pool = new Pool({
  host: process.env.POSTGRES_HOST,
  database: process.env.POSTGRES_DATABASE,
  user: process.env.POSTGRES_USER,
  password: process.env.POSTGRES_PASSWORD,
  port: parseInt(process.env.POSTGRES_PORT || '5432'),
  ssl: process.env.NODE_ENV === 'production' ? { rejectUnauthorized: false } : false
});

// Create the documents table if it doesn't exist
const initDb = async () => {
  const client = await pool.connect();
  try {
    await client.query(`
      CREATE TABLE IF NOT EXISTS documents (
        id SERIAL PRIMARY KEY,
        filename TEXT NOT NULL,
        content_type TEXT NOT NULL,
        data BYTEA NOT NULL,
        created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
        processing_status TEXT DEFAULT 'pending',
        processing_result JSONB
      );
    `);
  } finally {
    client.release();
  }
};

// Initialize the database
initDb().catch(console.error);

export { pool };
