import {query} from "../../lib/db"

export default async function handler(req, res) {
    try {
        const querySQL = "SELECT * from USERS;";
        const valuesParams = [];
        const [data] = await query({query: querySQL, values: valuesParams});

        res.status(200).json({ results: data});
    }
    catch (error) {

    }
}