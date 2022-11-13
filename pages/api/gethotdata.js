import {query} from "../../lib/db"

export default async function handler(req, res) {
  

    try {
        const querySQL = "select idArt, artName, currentBid, numBidders, artPath, imagePath from ARTS, USERS";
        const valuesParams = [];
        const [data] = await query({query: querySQL, values: valuesParams});

        res.status(200).json({results: data});
    }
    catch (error) {
        throw Error(error.message);
    }
}