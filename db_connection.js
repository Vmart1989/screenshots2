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
    console.log("Connected!");
}); 


// con.query(sql, function (err, result) {
//         if (err) throw err;
//         result.forEach(element => {
//             console.log(element.url);
//             webs = new Array(element.url)
//         });  
//     });


module.exports = {con, sql, mysql};

// con.end();