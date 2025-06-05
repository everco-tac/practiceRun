// pages/api/notes.ts
import type { NextApiRequest, NextApiResponse } from 'next';
import { getDB } from '../../../../../lib/db';
import { Note } from '../../../../../types/note';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const db = await getDB();

  if (req.method === 'GET') {
    const notes: Note[] = await db.all('SELECT * FROM notes');
    res.status(200).json(notes);
  } else if (req.method === 'POST') {
    const { title } = req.body;

    if (!title || typeof title !== 'string') {
      res.status(400).json({ error: 'Invalid title' });
      return;
    }

    const result = await db.run('INSERT INTO notes (title) VALUES (?)', title);
    res.status(201).json({ id: result.lastID });
  } else {
    res.setHeader('Allow', ['GET', 'POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
