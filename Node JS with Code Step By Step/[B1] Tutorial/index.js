/* ------------------------------------------------------------------------------------------ */

// How to setup MongoDB with Node JS

/* 

const { MongoClient } = require("mongodb");

const urlDB = "mongodb://localhost:27017";
const nameDB = "codestepbystep";

const client = new MongoClient(urlDB);

async function connectDB() {
  let connection = await client.connect();
  let database = connection.db(nameDB);
  let collection = database.collection("fruits");
  let response = await collection.find({}).toArray();
  console.log(response);
}

connectDB(); 

*/

/* ------------------------------------------------------------------------------------------ */

// How to connect MongoDB with Node JS

/* 

const connectDB = require("./database");

connectDB().then((response) => {
  response
    .find()
    .toArray()
    .then((data) => {
      console.log(data);
    });
}); 

*/

/* ------------------------------------------------------------------------------------------ */

// How to Insert Data into MongoDB in Node JS

/* 

const connectDB = require("./database");

const insertData = async () => {
  const database = await connectDB();
  const response = await database.insertMany([
    { name: "Date", price: "$40" },
    { name: "Elderberry", price: "$50" },
  ]);

  if (response.acknowledged) {
    console.log("Data has been inserted into MongoDB");
  }
};

insertData(); 

*/

/* ------------------------------------------------------------------------------------------ */

// How to Update Data into MongoDB in Node JS

/* 

const connectDB = require("./database");

const updateData = async () => {
  const database = await connectDB();
  const response = await database.updateOne(
    { name: "Date" },
    {
      $set: { name: "Damson Date" },
    }
  );

  if (response.acknowledged) {
    console.log("Data has been updated into MongoDB");
  }
};

updateData(); 

*/

/* ------------------------------------------------------------------------------------------ */

// How to Delete Data into MongoDB in Node JS

/* 

const connectDB = require("./database");

const deleteData = async () => {
  const database = await connectDB();
  const response = await database.deleteOne({
    name: "Elderberry",
  });

  if (response.acknowledged) {
    console.log("Data has been deleted into MongoDB");
  }
};

deleteData(); 

*/

/* ------------------------------------------------------------------------------------------ */
