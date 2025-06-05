// lib/db.ts
import sqlite3 from 'sqlite3';
import { open, Database } from 'sqlite';
import path from 'path';

export async function getDB(): Promise<Database> {
  return open({
    filename: path.join(process.cwd(), 'db', 'database.db'),
    driver: sqlite3.Database,
  });
}
