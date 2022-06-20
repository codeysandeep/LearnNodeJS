const mysql = require("mysql");

const connectDB = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "codestepbystep",
});

connectDB.connect((error) => {
  if (error) {
    console.log("No Response Found!");
  } else {
    console.log("Application has been connected with MySQL");
  }
});

module.exports = connectDB;
