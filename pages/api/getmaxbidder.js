import { query } from "../../lib/db"

export default async function handler(req, res) {
  try {
    if (req.method === 'POST'){
      const querySQL = "SELECT bidderName from BIDS where bidArt = ? order by bidAmount desc limit 1";
      const valuesParams = [req.body.bidArt];
      const [data] = await query({ query: querySQL, values: valuesParams });
    //   console.log(data);
      res.status(200).json({ results: data });
    }
  }
  catch (error) {
    throw Error(error.message);
  }
}