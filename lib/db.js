import mysql from "mysql2/promise"

export async function query({ query, values = [] }) {
    const dbconnection = await mysql.createConnection({
        host: "localhost",
        user: "root",
        password: "Current-Root-Password",
        database: "Artwall"
    });

    try {
        const [results] = await dbconnection.execute(query, values);

        dbconnection.end();

        return results;
    }
    catch (error) {
        throw Error(error.message);
    }
}