import {query} from "../../lib/db"

export default async function handler(req, res) {
    try {
        if (req.method === 'POST'){
            const querySQL = "INSERT INTO USERS (username, email, password) VALUES(?, ?, SHA1(?));";
            const valuesParams = [req.body.username, req.body.email, req.body.password];
            query({query: querySQL, values: valuesParams});
            res.status(200).json({ message: "Registration Successful"});
        }   
    }
    catch (error) {
        throw Error(error.message);
    }
}