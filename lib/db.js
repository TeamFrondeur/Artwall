import mysql from "mysql2/promise"

export async function query({query, values = []}) {
    const dbconnection = await mysql.createConnection({
        host: "localhost",
        database: "Artwall",
        //port: 3001,
        user: "Frondeur",
        password: "Frondeur122846",
        socketPath: "/run/mysqld/mysqld.sock",
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