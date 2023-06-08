// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { SportBetNorms } from '@/utils/sport';
import axios from 'axios';
import type { NextApiRequest, NextApiResponse } from 'next'

type Data = any

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
    try {
      const response = await axios.get('https://www.sportybet.com/api/ng/factsCenter/configurableLiveOrPrematchEvents?sportId=sr%3Asport%3A1&_t=1685985371103');
      const resp = SportBetNorms(response.data);
      res.status(200).json(resp);
    } catch (err) {
      res.status(201).json([]);
    }
}
