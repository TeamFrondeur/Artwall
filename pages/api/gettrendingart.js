import {query} from "../../lib/db"

export default async function handler(req, res) {
  

    try {
        const querySQL = "select artName, artistName, currentBid, numBidders, artPath, endDate, imagePath from ARTS, USERS where numBidders = (select max(numBidders) from ARTS);";
        const valuesParams = [];
        const [data] = await query({query: querySQL, values: valuesParams});

        res.status(200).json({results: data});
    }
    catch (error) {
        throw Error(error.message);
    }
}