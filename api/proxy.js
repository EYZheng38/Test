export default async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  if (req.method === 'OPTIONS') { res.status(200).end(); return; }
  
  let body = '';
  if (typeof req.body === 'string') {
    body = req.body;
  } else {
    body = JSON.stringify(req.body);
  }

  const response = await fetch('https://api.deepseek.com/chat/completions', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': 'Bearer sk-31fd8abee0c84f03ac26b486fc63d1b0',
    },
    body: body,
  });
  const data = await response.json();
  res.status(200).json(data);
}

export const config = {
  api: { bodyParser: { sizeLimit: '1mb' } }
};
