// @ts-check
const { test, expect } = require("@playwright/test");

// BD

// const mysql = db.mysql
// const sql = db.sql
// const con = db.con

// let paginas = [
//   "playwright.dev",
//   "playwright.dev/docs/running-tests"
// ];


let date = new Date().toLocaleDateString("es-ES").replaceAll("/", "");
let time = new Date().toLocaleTimeString("es-ES").replaceAll(":", "");

let db = require('../db_connection');

let webs = [];

db.con.query(db.sql, function (err, result) {
  if (err) throw err;
  result.forEach(element => {
      webs.push(element.url)
      
  });  
});

console.log(webs)

test("screenshot", async ({ page }) => {
  console.table(webs)
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




