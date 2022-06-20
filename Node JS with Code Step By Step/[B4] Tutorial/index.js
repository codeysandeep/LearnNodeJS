/* ------------------------------------------------------------------------------------------ */

// How Search API works with Single field in Node JS

/* 

const express = require("express");
const connectDB = require("./database");
const ProductModel = require("./models");

connectDB();

const app = express();

app.use(express.json());

app.get("/search/:key", async (request, response) => {
  const data = await ProductModel.find({
    name: { $regex: request.params.key },
  });
  response.send(data);
});

app.listen(3000); 

*/

/* ------------------------------------------------------------------------------------------ */

// How Search API works with Multiple fields in Node JS

/* 

const express = require("express");
const connectDB = require("./database");
const ProductModel = require("./models");

connectDB();

const app = express();

app.use(express.json());

app.get("/search/:key", async (request, response) => {
  const data = await ProductModel.find({
    $or: [
      { name: { $regex: request.params.key } },
      { category: { $regex: request.params.key } },
    ],
  });
  response.send(data);
});

app.listen(3000); 

*/

/* ------------------------------------------------------------------------------------------ */
