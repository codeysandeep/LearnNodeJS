/* ------------------------------------------------------------------------------------------ */

// File System Module in Node JS

/* 

const fs = require("fs");

const command = process.argv;
if (command[2] === "add") {
  fs.writeFileSync(command[3], command[4]);
} else if (command[2] === "remove") {
  fs.unlinkSync(command[3]);
} else {
  console.log("Invalid Command!");
} 

*/

/* ------------------------------------------------------------------------------------------ */

// Path Module in Node JS

/* 

const path = require("path");
const fs = require("fs");

const directory = path.join(__dirname, "files");
fs.writeFileSync(`${directory}/apple.txt`, "A for Apple"); 

*/

/* ------------------------------------------------------------------------------------------ */

// How to get list of filenames in folder with Node JS

/* 

const path = require("path");
const fs = require("fs");

const directory = path.join(__dirname, "files");
fs.readdir(directory, (error, files) => {
  console.log(files);
}); 

*/

/* ------------------------------------------------------------------------------------------ */

// How to create file using File System Module in Node JS

/* 

const path = require("path");
const fs = require("fs");

const directory = path.join(__dirname, "files");
fs.writeFileSync(`${directory}/banana.txt`, "B for Banana"); 

*/

/* ------------------------------------------------------------------------------------------ */

// How to read file using File System Module in Node JS

/* 

const path = require("path");
const fs = require("fs");

const directory = path.join(__dirname, "files");
fs.readFile(`${directory}/banana.txt`, "utf8", (error, text) => {
  console.log(text);
}); 

*/

/* ------------------------------------------------------------------------------------------ */

// How to append text to a file in Node JS

/* 

const path = require("path");
const fs = require("fs");

const directory = path.join(__dirname, "files");
fs.appendFile(`${directory}/coconut.txt`, "C for Coconut", (error) => {
  if (!error) {
    console.log("File has been updated successfully.");
  }
}); 

*/

/* ------------------------------------------------------------------------------------------ */

// How to rename file using File System Module in Node JS

/* 

const path = require("path");
const fs = require("fs");

const directory = path.join(__dirname, "files");
fs.rename(`${directory}/fruit.txt`, `${directory}/date.txt`, (error) => {
  if (!error) {
    console.log("File has been renamed successfully.");
  }
}); 

*/

/* ------------------------------------------------------------------------------------------ */

// How to delete file using File System Module in Node JS

/* 

const path = require("path");
const fs = require("fs");

const directory = path.join(__dirname, "files");
fs.unlinkSync(`${directory}/elderberry.txt`); 

*/

/* ------------------------------------------------------------------------------------------ */
