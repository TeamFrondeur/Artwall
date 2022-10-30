import {query} from "../../lib/db"

export default async function handler(req, res) {
    try {
        if (req.method === 'POST'){
            const querySQL = "INSERT INTO USERS (Email, Password) VALUES(?, SHA1(?));";
            const valuesParams = [req.body.email, req.body.password];
            const [data] = await query({query: querySQL, values: valuesParams});

            res.status(200).json({ results: data});
        }
        
    }
    catch (error) {
        throw Error(error.message);
    }
}