// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import { Start } from '../../utils/db/connect';

export default function handler(req, res) {
  Start();
  res.status(200).json({ name: 'John Doe' });
}
