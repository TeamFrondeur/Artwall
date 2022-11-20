import { query } from "../../lib/db"

export default async function handler(req, res) {
  try {
    if (req.method === "POST") {
      const querySQL = "SELECT artName, artPath, currentBid, numBidders, USERS.imagePath from ARTS INNER JOIN USERS ON artName = ? and ARTS.artistName = USERS.userName;";
      const valuesParams = [req.body.bidArt];
      const [data] = await query({ query: querySQL, values: valuesParams });

      res.status(200).json({ results: data });
    }
  }
  catch (error) {
    throw Error(error.message);
  }
}