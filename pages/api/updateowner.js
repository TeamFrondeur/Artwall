import { query } from "../../lib/db"

export default async function handler(req, res) {
    try {
        if (req.method === 'POST') {
            const querySQL = "update ARTS set owner = ? where artName = ?;";
            const valuesParams = [req.body.maxBidder, req.body.bidArt];
            const [data] = await query({ query: querySQL, values: valuesParams });

            res.status(200).json({ results: data });
        }

    }
    catch (error) {
        throw Error(error.message);
    }
}