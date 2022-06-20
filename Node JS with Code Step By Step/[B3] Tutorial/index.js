/* ------------------------------------------------------------------------------------------ */

// How to connect MongoDB with Node JS

/* 

const mongoose = require("mongoose");

const connectDB = async () => {
  await mongoose.connect("mongodb://localhost:27017/codestepbystep");

  const FruitSchema = new mongoose.Schema({
    name: String,
    price: String,
  });

  const FruitModel = mongoose.model("fruits", FruitSchema);

  const data = new FruitModel({
    name: "Hackberry",
    price: "$80",
  });
  const response = await data.save();
  console.log(response);
};

connectDB(); 

*/

/* ------------------------------------------------------------------------------------------ */

// How to Update Data into MongoDB in Node JS

/* 

const mongoose = require("mongoose");

const connectDB = async () => {
  await mongoose.connect("mongodb://localhost:27017/codestepbystep");

  const FruitSchema = new mongoose.Schema({
    name: String,
    price: String,
  });

  const FruitModel = mongoose.model("fruits", FruitSchema);

  const data = await FruitModel.updateOne(
    { name: "Damson Date" },
    {
      $set: { name: "Date" },
    }
  );

  if (data.acknowledged) {
    console.log("Data has been updated into MongoDB");
  }
};

connectDB(); 

*/

/* ------------------------------------------------------------------------------------------ */

// How to Delete Data into MongoDB in Node JS

/* 

const mongoose = require("mongoose");

const connectDB = async () => {
  await mongoose.connect("mongodb://localhost:27017/codestepbystep");

  const FruitSchema = new mongoose.Schema({
    name: String,
    price: String,
  });

  const FruitModel = mongoose.model("fruits", FruitSchema);

  const data = await FruitModel.deleteOne({ name: "Elderberry" });

  if (data.acknowledged) {
    console.log("Data has been deleted into MongoDB");
  }
};

connectDB(); 

*/

/* ------------------------------------------------------------------------------------------ */

// How to Read Data into MongoDB in Node JS

/* 

const mongoose = require("mongoose");

const connectDB = async () => {
  await mongoose.connect("mongodb://localhost:27017/codestepbystep");

  const FruitSchema = new mongoose.Schema({
    name: String,
    price: String,
  });

  const FruitModel = mongoose.model("fruits", FruitSchema);

  const data = await FruitModel.find();
  console.log(data);
};

connectDB(); 

*/

/* ------------------------------------------------------------------------------------------ */

// How POST Request works in Node JS

/* 

const express = require("express");

const connectDB = require("./database");
const FruitModel = require("./models");

connectDB();

const app = express();

app.use(express.json());

app.post("/create", async (request, response) => {
  const data = await new FruitModel(request.body);
  const result = await data.save();
  response.send(result);
});

app.listen(3000); 

*/

/* ------------------------------------------------------------------------------------------ */

// How GET Request works in Node JS

/* 

const express = require("express");

const connectDB = require("./database");
const FruitModel = require("./models");

connectDB();

const app = express();

app.use(express.json());

app.get("/read", async (request, response) => {
  const data = await FruitModel.find();
  response.send(data);
});

app.listen(3000); 

*/

/* ------------------------------------------------------------------------------------------ */

// How PUT Request works in Node JS

/* 

const express = require("express");

const connectDB = require("./database");
const FruitModel = require("./models");

connectDB();

const app = express();

app.use(express.json());

app.put("/update/:_id", async (request, response) => {
  const data = await FruitModel.updateOne(request.params, {
    $set: request.body,
  });
  response.send(data);
});

app.listen(3000); 

*/

/* ------------------------------------------------------------------------------------------ */

// How DELETE Request works in Node JS

/* 

const express = require("express");

const connectDB = require("./database");
const FruitModel = require("./models");

connectDB();

const app = express();

app.use(express.json());

app.delete("/delete/:_id", async (request, response) => {
  const data = await FruitModel.deleteOne(request.params);
  response.send(data);
});

app.listen(3000); 

*/

/* ------------------------------------------------------------------------------------------ */
