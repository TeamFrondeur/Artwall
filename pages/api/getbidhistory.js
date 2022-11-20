import { query } from "../../lib/db"

export default async function handler(req, res) {
  try {
    if (req.method === 'POST'){
      const querySQL = "select idBIDS, bidTime, bidderName, bidAmount, imagePath from BIDS left join USERS ON bidderName=userName where bidArt=? order by bidTime DESC;";
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