import { query } from "../../lib/db"

export default async function handler(req, res) {
  try {
    const querySQL = "SELECT bidderName,  from BIDS where userName = ?;";
    const valuesParams = [req.body.userName];
    const data = await query({ query: querySQL, values: valuesParams });

    res.status(200).json({ results: data });
  }
  catch (error) {
    throw Error(error.message);
  }
}