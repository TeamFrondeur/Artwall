import {query} from "../../lib/db"
import formidable from "formidable";
import path from "path";
import fs from "fs/promises";

export const config = {
    api: {
        bodyParser: false,
    },
};

const readFile = (req, saveLocally) => {
    const options = {};
    if (saveLocally) {
        options.uploadDir = path.join(process.cwd(), "/public/images/arts");
        options.filename = (name, ext, path, form) => {
            return req.body.artName;
        }
    }

    const form = formidable(options);

    return new Promise((resolve, reject) => {
        form.parse(req, (err, fields, files) => {
            if (err) reject(err);
            resolve({fields, files})
        })
    })
}

export default async function handler(req, res) {

    try {
        // if (req.method === 'POST'){
        //     const form = formidable();
        //     form.parse(req, (e))
        //     const querySQL = "INSERT INTO ARTS (artName, artistName, genre, currentBid, numBidders, artPath, endDate) VALUES(?, ?, ?, 0, ?, ?);";
        //     const valuesParams = [req.body.artName, req.body.artistName, req.body.genre, req.body.currentBid, req.body.artPath, req.body.endDate];
        //     const data = query({query: querySQL, values: valuesParams});
        //     res.status(200).json({ results: data});
        // }   

        await fs.readdir(path.join(process.cwd() + "/public/", "/images", "/arts"));
        await readFile(req, true);
        res.status(200).json({message: "Upload Successful!"});
    }
    catch (error) {
        throw Error(error.message);
    }
}