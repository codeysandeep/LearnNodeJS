/* ------------------------------------------------------------------------------------------ */

// How API works with Node JS

/* 

const express = require("express");
const connectDB = require("./database");

const app = express();

app.get("/", async (request, response) => {
  const database = await connectDB();
  const data = await database.find().toArray();
  response.send(data);
});

app.listen(3000); 

*/

/* ------------------------------------------------------------------------------------------ */

// How POST Request works in Node JS

/* 

const express = require("express");
const connectDB = require("./database");

const app = express();

app.use(express.json());

app.post("/", async (request, response) => {
  const database = await connectDB();
  const data = await database.insertOne(request.body);
  response.send(data);

  if (data.acknowledged) {
    console.log("Data has been inserted into MongoDB");
  }
});

app.listen(3000); 

*/

/* ------------------------------------------------------------------------------------------ */

// How PUT Request works in Node JS

/* 

const express = require("express");
const connectDB = require("./database");

const app = express();

app.use(express.json());

app.put("/:name", async (request, response) => {
  const database = await connectDB();
  const data = await database.updateOne(
    { name: request.params.name },
    { $set: request.body }
  );
  response.send(data);

  if (data.acknowledged) {
    console.log("Data has been updated into MongoDB");
  }
});

app.listen(3000); 

*/

/* ------------------------------------------------------------------------------------------ */

// How Delete Request works in Node JS

/* 

const express = require("express");
const mongodb = require("mongodb");
const connectDB = require("./database");

const app = express();

app.use(express.json());

app.delete("/:id", async (request, response) => {
  const database = await connectDB();
  const data = await database.deleteOne({
    _id: new mongodb.ObjectId(request.params.id),
  });
  response.send(data);

  if (data.acknowledged) {
    console.log("Data has been deleted into MongoDB");
  }
});

app.listen(3000); 

*/

/* ------------------------------------------------------------------------------------------ */
