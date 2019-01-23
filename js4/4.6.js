const readlineSync = require("readline-sync");
var a = parseInt(readlineSync.question("enter a number for a ?"));

var factorial = function fac(a) {

  return a < 2 ? 1 : a * fac(a - 1); };

console.log(factorial(a));
