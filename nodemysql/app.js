const express = require("express");
const mysql = require("mysql");

//create connection
const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: ""
  //database: "nodemysql"
});

//connect
db.connect(err => {
  if (err) {
    throw err;
  }
  console.log("MYSQL connected....");
});

const app = express();
//create db
app.get("/createdb", (req, res) => {
  let sql = "CREATE DATABASE nodemysql";
  db.query(sql, (err, result) => {
    if (err)
    {
        console.log(result);
    } 
    console.log(result);
    res.send("database created..");
  });
});