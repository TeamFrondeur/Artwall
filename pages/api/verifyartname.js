import {query} from "../../lib/db"

export default async function handler(req, res) {
    try {
        if (req.method === 'POST'){
            const querySQL = "SELECT artPath from ARTS where artPath=?;";
            const valuesParams = [req.body.artPath];
            const [data] = await query({query: querySQL, values: valuesParams});

            res.status(200).json({ results: data});
        }
        
    }
    catch (error) {
        throw Error(error.message);
    }
}