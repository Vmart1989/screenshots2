const mysql = require('mysql');

const con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "websnivelcalidad"
});

const sql = "SELECT url FROM webs"

con.connect(function(err) {
    if (err) throw err;
    // console.log("Connected!");
}); 

module.exports = {con, sql};
