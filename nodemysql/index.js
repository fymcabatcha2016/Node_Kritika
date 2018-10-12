const express = require("express");
const mysql = require("mysql");
//create connection
const db = mysql.createConnection({
 host: "localhost",
 user: "root",
 password: "",

});
//connect
db.connect(err => {
 if (err) {
    console.log(err);
 }
 console.log("MYSQL connected....");
});
const app = express();
app.listen("3000", () => {
 console.log("server started on port 3000");
});
//create db
app.get("/createdb", (req, res) => {
 let sql = "CREATE DATABASE nodemysql1";
 db.query(sql, (err, result) => {
 if (err){
     console.log(err);
 } 
 console.log(result);
 res.send("database created..");
 });
});
//create table
app.get('/createposttable', (req,res) => {
    let sql = 'CREATE TABLE posts(id int AUTO_INCREMENT, name varchar(20), primary key(id)';
    db.query(sql,(err,result) =>{
    if(err) throw err;
    console.log(result);
    res.send('Table created..');
    });
    });
//insert values into table
app.get("/addpost1", (req, res) => {
 let post = { name: "MCA" };
 let sql = "INSERT into posts set ?";
 let query = db.query(sql, post, (err, result) => {
 if (err) throw err;
 console.log(result);
 res.send("Value inserted..");
 });
});
