/* ------------------------------------------------------------------------------------------ */

// Application Level Middleware in Node JS

/* 

const express = require("express");

const app = express();

const authenticator = (request, response, next) => {
  if (!request.query.key) {
    response.send("<center>No Response Found!</center>");
  } else {
    next();
  }
};

app.use(authenticator);

app.get("", (request, response) => {
  response.send("<center>Home Page</center>");
});

app.get("/fruits", (request, response) => {
  response.send("<center>Fruits Page</center>");
});

app.listen(3000); 

*/

/* ------------------------------------------------------------------------------------------ */

// Route Level Middleware in Node JS

/* 

const express = require("express");

const app = express();

const authenticator = (request, response, next) => {
  if (!request.query.key) {
    response.send("<center>No Response Found!</center>");
  } else {
    next();
  }
};

app.get("", (request, response) => {
  response.send("<center>Home Page</center>");
});

app.get("/fruits", authenticator, (request, response) => {
  response.send("<center>Fruits Page</center>");
});

app.listen(3000); 

*/

/* ------------------------------------------------------------------------------------------ */

// How to create a Custom Middleware in Node JS

/* 

const express = require("express");
const middleware = require("./middleware");

const app = express();

app.get("", (request, response) => {
  response.send("<center>Home Page</center>");
});

app.get("/fruits", middleware, (request, response) => {
  response.send("<center>Fruits Page</center>");
});

app.listen(3000); 

*/

/* ------------------------------------------------------------------------------------------ */

// How to apply Middleware on Group of Routes in Node JS

/* 

const express = require("express");
const middleware = require("./middleware");

const app = express();
const route = express.Router();

route.use(middleware);

app.get("", (request, response) => {
  response.send("<center>Home Page</center>");
});

route.get("/about", (request, response) => {
  response.send("<center>About Page</center>");
});

route.get("/contact", (request, response) => {
  response.send("<center>Contact Page</center>");
});

app.use("/", route);

app.listen(3000); 

*/

/* ------------------------------------------------------------------------------------------ */
