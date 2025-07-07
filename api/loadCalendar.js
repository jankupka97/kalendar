// /api/loadCalendar.js

export default async function handler(req, res) {
  const { user } = req.query;

  if (!user) {
    return res.status(400).json({ error: 'Chybí parametr user' });
  }

  // Zatím použijeme testovací statická data (simulace databáze)
  const fakeStorage = {
    'jan.kral': {
      holiday: ['2025-08-01', '2025-08-02'],
      unavailable: ['2025-08-05']
    }
  };

  const data = fakeStorage[user] || { holiday: [], unavailable: [] };
  res.status(200).json(data);
}
