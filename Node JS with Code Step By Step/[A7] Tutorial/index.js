/* ------------------------------------------------------------------------------------------ */

// How Express JS works with Node JS

/* 

const express = require("express");

const app = express();

app.get("", (request, response) => {
  response.send("Home Page");
});

app.get("/about", (request, response) => {
  response.send("About Page");
});

app.listen(3000); 

*/

/* ------------------------------------------------------------------------------------------ */

// How to render HTML Elements in Node JS

/* 

const express = require("express");

const app = express();

app.get("", (request, response) => {
  response.send("<center>Home Page</center>");
});

app.listen(3000); 

*/

/* ------------------------------------------------------------------------------------------ */

// How to render JSON Objects in Node JS

/* 

const express = require("express");

const app = express();

app.get("", (request, response) => {
  response.send({
    name: "Apple",
    price: "$10",
  });
});

app.listen(3000); 

*/

/* ------------------------------------------------------------------------------------------ */

// How to render Array of JSON Objects in Node JS

/* 

const express = require("express");

const app = express();

app.get("", (request, response) => {
  response.send([
    {
      name: "Apple",
      price: "$10",
    },
    {
      name: "Banana",
      price: "$20",
    },
  ]);
});

app.listen(3000); 

*/

/* ------------------------------------------------------------------------------------------ */

// How to render HTML Pages in Node JS

/* 

const express = require("express");
const path = require("path");

const app = express();
const public = path.join(__dirname, "public");

app.use(express.static(public));

app.listen(3000); 

*/

/* ------------------------------------------------------------------------------------------ */

// GET Request in Node JS

/* 

const express = require("express");
const path = require("path");

const app = express();
const public = path.join(__dirname, "public");

app.get("", (request, response) => {
  response.sendFile(public + "/" + "index.html");
});

app.get("/about", (request, response) => {
  response.sendFile(public + "/" + "about.html");
});

app.get("*", (request, response) => {
  response.sendFile(public + "/" + "404.html");
});

app.listen(3000); 

*/

/* ------------------------------------------------------------------------------------------ */
