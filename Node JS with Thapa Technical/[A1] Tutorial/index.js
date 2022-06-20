/* ------------------------------------------------------------------------------------------ */

// How to print "Hello, World!" in Node JS

/* 

console.log("Hello, World!"); 

*/

/* ------------------------------------------------------------------------------------------ */

// How to create a file using FS Module in Node JS

/* 

const student = {
  name: "Sandeep Malothiya",
  age: 22,
};

const fs = require("fs");
fs.writeFileSync("file.txt", JSON.stringify(student)); 

*/

/* ------------------------------------------------------------------------------------------ */

// How to append text into a file using FS Module in Node JS

/* 

const student = {
  name: "Rohit Kushwaha",
  age: 23,
};

const fs = require("fs");
fs.appendFileSync("file.txt", JSON.stringify(student)); 

*/

/* ------------------------------------------------------------------------------------------ */

// How to read text from a file using FS Module in Node JS

/* 

const fs = require("fs");
const text = fs.readFileSync("file.txt").toString();
console.log(text); 

*/

/* ------------------------------------------------------------------------------------------ */

// How to rename a file using FS Module in Node JS

/* 

const fs = require("fs");
fs.renameSync("file.txt", "file.json"); 

*/

/* ------------------------------------------------------------------------------------------ */
