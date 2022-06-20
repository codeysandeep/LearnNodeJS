/* ------------------------------------------------------------------------------------------ */

// Upload File using Multer in Node JS

/* 

const express = require("express");
const multer = require("multer");

const app = express();

const uploadFile = multer({
  storage: multer.diskStorage({
    destination: function (request, file, callBackFunction) {
      callBackFunction(null, "uploads");
    },
    filename: function (request, file, callBackFunction) {
      callBackFunction(null, file.originalname);
    },
  }),
}).single("filename");

app.post("/upload", uploadFile, (request, response) => {
  response.send("File has been uploaded");
});

app.listen(3000); 

*/

/* ------------------------------------------------------------------------------------------ */

// OS Module in Node JS

/* 

const os = require("os");

console.log(os.hostname());
console.log(os.arch());
console.log(os.platform());
console.log(os.totalmem() / (1024 * 1024 * 1024));
console.log(os.freemem() / (1024 * 1024 * 1024));
console.log(os.userInfo()); 

*/

/* ------------------------------------------------------------------------------------------ */

// Events and Event Emitter in Node JS

/* 

const express = require("express");
const EventEmitter = require("events");

const app = express();
const event = new EventEmitter();

let count = 0;
event.on("countAPI", () => {
  count++;
  console.log(count);
});

app.get("/", (request, response) => {
  response.send("API has been called");
  event.emit("countAPI");
});

app.listen(3000); 

*/

/* ------------------------------------------------------------------------------------------ */
