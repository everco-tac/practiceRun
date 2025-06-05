// scripts/init-db.ts
import { getDB } from '../lib/db';

const init = async () => {
  const db = await getDB();

  await db.exec(`
    CREATE TABLE IF NOT EXISTS notes (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      title TEXT NOT NULL
    );
  `);

  console.log("✅ Notes table created.");
  await db.close(); // optional: close DB after setup
};

init().catch((err) => {
  console.error("❌ Failed to initialize DB:", err);
});

// This script initializes the database by creating the 'notes' table if it doesn't exist.
// You can run this script using `ts-node` or compile it to JavaScript and run it with Node.js.
// npx ts-node scripts/init-db.ts
