export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Použij POST metodu' });
  }

  try {
    const { user, holiday, unavailable } = req.body;

    if (!user || !Array.isArray(holiday) || !Array.isArray(unavailable)) {
      return res.status(400).json({ message: 'Chybné nebo neúplné údaje' });
    }

    console.log(`Uživatel: ${user}`);
    console.log(`Dovolené: ${holiday}`);
    console.log(`Nedostupnosti: ${unavailable}`);

    return res.status(200).json({ message: 'Data uložena' });
  } catch (e) {
    console.error('Chyba:', e);
    return res.status(500).json({ message: 'Interní chyba serveru' });
  }
}
