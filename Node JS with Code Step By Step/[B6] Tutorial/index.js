/* ------------------------------------------------------------------------------------------ */

// How to connect MySQL with Node JS

/* 

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

*/

/* ------------------------------------------------------------------------------------------ */

// How GET Request works with MySQL in Node JS

/* 

const express = require("express");
const connectDB = require("./database");

const app = express();

app.get("/", (request, response) => {
  connectDB.query("SELECT * FROM fruits", (error, result) => {
    if (error) {
      response.send("No Response Found!");
    } else {
      response.send(result);
    }
  });
});

app.listen(3000); 

*/

/* ------------------------------------------------------------------------------------------ */

// How POST Request works with MySQL in Node JS

/* 

const express = require("express");
const connectDB = require("./database");

const app = express();

app.use(express.json());

app.post("/", (request, response) => {
  const data = request.body;
  connectDB.query("INSERT INTO fruits SET ?", data, (error, result, fields) => {
    if (error) {
      response.send("No Response Found!");
    } else {
      response.send(result);
    }
  });
});

app.listen(3000); 

*/

/* ------------------------------------------------------------------------------------------ */

// How PUT Request works with MySQL in Node JS

/* 

const express = require("express");
const connectDB = require("./database");

const app = express();

app.use(express.json());

app.put("/:id", (request, response) => {
  const data = [request.body.name, request.body.price, request.params.id];
  connectDB.query(
    "UPDATE fruits SET name = ?, price = ? where id = ?",
    data,
    (error, result, fields) => {
      if (error) {
        response.send("No Response Found!");
      } else {
        response.send(result);
      }
    }
  );
});

app.listen(3000); 

*/

/* ------------------------------------------------------------------------------------------ */

// How DELETE Request works with MySQL in Node JS

/* 

const express = require("express");
const connectDB = require("./database");

const app = express();

app.delete("/:id", (request, response) => {
  connectDB.query(
    `DELETE FROM fruits WHERE id = ${request.params.id}`,
    (error, result, field) => {
      if (error) {
        response.send("No Response Found!");
      } else {
        response.send(result);
      }
    }
  );
});

app.listen(3000); 

*/

/* ------------------------------------------------------------------------------------------ */
