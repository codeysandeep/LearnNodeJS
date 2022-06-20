/* ------------------------------------------------------------------------------------------ */

// Asynchronous programming with Node JS

/* 

console.log(1);

setTimeout(() => {
  console.log(3);
}, 3000);

console.log(2); 

*/

/* ------------------------------------------------------------------------------------------ */

// How to handle drawbacks of Asynchronous programming with Node JS

/* 

let A = 55;
let B = 0;

let update = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(44);
  }, 2000);
});

update.then((number) => {
  B = number;
  console.log(`${A} + ${B} = ${A + B}`);
}); 

*/

/* ------------------------------------------------------------------------------------------ */

// How Node JS works?

/* 

console.log(1);

setTimeout(() => {
  console.log(4);
}, 2000);

setTimeout(() => {
  console.log(3);
}, 1000);

console.log(2); 

*/

/* ------------------------------------------------------------------------------------------ */
