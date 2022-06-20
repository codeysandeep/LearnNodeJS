/* ------------------------------------------------------------------------------------------ */

// How EJS Template Engine works in Node JS

/* 

const express = require("express");
const path = require("path");

const app = express();
const public = path.join(__dirname, "public");

app.set("view engine", "ejs");

app.get("", (request, response) => {
  response.sendFile(public + "/" + "index.html");
});

app.get("/fruits", (request, response) => {
  const fruits = [
    { name: "Apple", price: "$10" },
    { name: "Banana", price: "$20" },
  ];
  response.render("fruits", { fruits });
});

app.listen(3000); 

*/

/* ------------------------------------------------------------------------------------------ */
