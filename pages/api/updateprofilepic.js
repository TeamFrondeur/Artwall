import {query} from "../../lib/db"

export default async function handler(req, res) {
    try {
        if (req.method === 'POST'){
            const querySQL = "UPDATE USERS SET imagePath=? WHERE userName=?;";
            const valuesParams = [req.body.imagePath, req.body.userName];
            const data = query({query: querySQL, values: valuesParams});
            res.status(200).json({ results: data});
        }   
    }
    catch (error) {
        throw Error(error.message);
    }
}