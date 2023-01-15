import { query } from "../../lib/db"

export default async function handler(req, res) {
  try {
    if (req.method === 'POST'){
      const querySQL = "SELECT idBIDS, bidderName, USERS.imagePath from BIDS INNER JOIN USERS ON bidderName = USERS.userName and bidArt = ? group by bidderName;";
      const valuesParams = [req.body.bidArt];
      const data = await query({ query: querySQL, values: valuesParams });
      console.log(data);
      res.status(200).json({ results: data });
    }
  }
  catch (error) {
    throw Error(error.message);
  }
}