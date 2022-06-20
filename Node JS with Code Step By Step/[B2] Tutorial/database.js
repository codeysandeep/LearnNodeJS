const { MongoClient } = require("mongodb");

const urlDB = "mongodb://localhost:27017";
const nameDB = "codestepbystep";

const client = new MongoClient(urlDB);

async function connectDB() {
  let connection = await client.connect();
  let database = connection.db(nameDB);
  return database.collection("fruits");
}

module.exports = connectDB;
