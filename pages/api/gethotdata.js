import {query} from "../../lib/db"

export default async function handler(req, res) {
    try {
        if (req.method === 'POST'){
            const querySQL = "select idArt, artName, artistName, genre, currentBid, numBidders, artPath, USERS.imagePath from ARTS INNER JOIN USERS on ARTS.artistname = USERS.userName and genre=?;";
            const valuesParams = [req.body.genre];
            const data = await query({query: querySQL, values: valuesParams});
    
            res.status(200).json({results: data});
        }
    }
    catch (error) {
        throw Error(error.message);
    }
}