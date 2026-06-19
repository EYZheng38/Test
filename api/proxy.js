module.exports = async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  try {
    const response = await fetch('https://api.deepseek.com/chat/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer sk-31fd8abee0c84f03ac26b486fc63d1b0',
      },
      body: JSON.stringify(req.body),
    });

    const text = await response.text();
    res.setHeader('Content-Type', 'application/json');
    return res.status(response.status).send(text);
  } catch(e) {
    return res.status(500).json({ error: e.message });
  }
}
