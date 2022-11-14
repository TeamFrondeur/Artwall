import {query} from "../../lib/db"

export default async function handler(req, res) {
    try {
        const querySQL = "SELECT idART, artPath, artName, currentBid, numBidders, endDate from ARTS where artistName = ?;";
        const valuesParams = [req.body.artistName];
        const data = await query({query: querySQL, values: valuesParams});

        res.status(200).json({results: data});
    }
    catch (error) {
        throw Error(error.message);
    }
}