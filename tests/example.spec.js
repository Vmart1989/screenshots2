// @ts-check
const { test, expect } = require("@playwright/test");

let date = new Date().toLocaleDateString("es-ES").replaceAll("/", "");
let time = new Date().toLocaleTimeString("es-ES").replaceAll(":", "");

// import database connection
let db = require('../db_connection');

let webs = [];
// SQL QUERY
db.con.query(db.sql, function (err, result) {
  if (err) throw err;
  result.forEach(element => {
    // FILL WEBS ARRAY
      webs.push(element.url)
      
  });  
});


// TEST
test("screenshot", async ({ page }) => {
  // console.table(webs)
  for (let i = 0; i < webs.length; i++) {
    const pagina = webs[i];
    const paginaURL = pagina.replaceAll("/", "-");
    await page.goto("https://" + pagina + "/");
    // take screenshot
    await page.screenshot({
      path: "screenshots/" + paginaURL + date + "-" + time + ".png",
      fullPage: true,
    });
  } 
  db.con.end();
});




