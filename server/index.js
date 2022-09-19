const express = require("express");
const mysql = require("mysql");
const cors = require("cors");


const app = express();
app.use(cors());
app.use(express.json())

const db = mysql.createConnection({
    host: "localhost",
    user: "Frondeur",
    password: "Frondeur122846",
    database: "Artwall"
});


// app.get("/", (req, res) => {
//     const sql = "INSERT INTO USERS (Email, Password) VALUES (\"Yes\", MD5(\"1234kimochi\");"  
//     db.query(sql, (err, result) => {
//         res.send("hello world");
//     });
// });


app.post("/register", (req, res) => {
    const email = req.body.email;
    const password = req.body.password;
    
    db.query("INSERT INTO USERS (Email, Password) VALUES(?,?)", [email, password], (err, result) => {
        console.log(err);
    })
})
app.listen(3001, () => {
    console.log("running on port 3001");
});