const readlineSync = require("readline-sync");
let num = parseInt(readlineSync.question("What is your favorite number? "));

while (num !== 42) {
  num = parseInt(readlineSync.question("are you sure? "));
}
 console.log("Right number ");
 
