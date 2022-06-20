/* ------------------------------------------------------------------------------------------ */

// How to print "Hello, World!" in Node JS

/* 

console.log("Hello, World!"); 

*/

/* ------------------------------------------------------------------------------------------ */

// How to import & export in Node JS

/* 

const fruits = require("./fruits");
console.log(fruits); 

*/

/* ------------------------------------------------------------------------------------------ */

// How to create a server in Node JS

/* 

const http = require("http");

http
  .createServer((request, response) => {
    response.write("Application is listening on port 3000");
    response.end();
  })
  .listen(3000); 
  
*/

/* ------------------------------------------------------------------------------------------ */
