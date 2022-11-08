import {query} from "../../lib/db"

export default async function handler(req, res) {
    try {
        if (req.method === 'POST'){
            const querySQL = "SELECT username, password from USERS where username=? and password=SHA1(?);";
            const valuesParams = [req.body.username, req.body.password];
            const [data] = await query({query: querySQL, values: valuesParams});

            res.status(200).json({ results: data});
        }
        
    }
    catch (error) {
        throw Error(error.message);
    }
}