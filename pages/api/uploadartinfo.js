import {query} from "../../lib/db"

export default async function handler(req, res) {
    try {
        if (req.method === 'POST'){
            const querySQL = "INSERT INTO ARTS (artName, artistName, owner, genre, currentBid, numBidders, artPath, endDate) VALUES(?, ?, ?, ?, ?, 0, ?, ?);";
            const valuesParams = [req.body.artName, req.body.artistName, req.body.artistName, req.body.genre, req.body.currentBid, req.body.artPath, req.body.endDate];
            const data = query({query: querySQL, values: valuesParams});
            res.status(200).json({ results: data});
        }   
    }
    catch (error) {
        throw Error(error.message);
    }
}