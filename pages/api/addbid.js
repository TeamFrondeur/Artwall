import {query} from "../../lib/db"

export default async function handler(req, res) {
    try {
        if (req.method === 'POST'){
            const querySQL = "INSERT INTO BIDS (bidArt, bidderName, bidAmount, bidTime) VALUES(?, ?, ?, now());";
            const valuesParams = [req.body.bidArt, req.body.bidderName, req.body.bidAmount];
            const data = query({query: querySQL, values: valuesParams});
            res.status(200).json({ results: data});
        }   
    }
    catch (error) {
        throw Error(error.message);
    }
}