// pages/api/proxy.ts
import { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    const response = await fetch('http://localhost:8080' + req.url, {
      method: req.method,
      headers: req.headers as HeadersInit,
      body: req.method !== 'GET' ? JSON.stringify(req.body) : undefined,
    });

    const data = await response.json();
    res.status(response.status).json(data);
  } catch (error) {
    console.error('Ошибка прокси:', error);
    res.status(500).json({ error: 'Ошибка прокси' });
  }
}
