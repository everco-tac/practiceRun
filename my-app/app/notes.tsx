// pages/index.tsx
import { useEffect, useState } from 'react';
import { Note } from '../types/note';

export default function Home() {
  const [notes, setNotes] = useState<Note[]>([]);

  useEffect(() => {
    fetch('/api/notes')
      .then((res) => res.json())
      .then(setNotes)
      .catch(console.error);
  }, []);

  return (
    <div>
      <h1>Notes</h1>
      <ul>
        {notes.map((note) => (
          <li key={note.id}>{note.title}</li>
        ))}
      </ul>
    </div>
  );
}
