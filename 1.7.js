const readlineSync = require("readline-sync");
var shoe  = readlineSync.question("Ask for shoe-size ? ");
var birthYear = readlineSync.question("Ask for birth year ? ");
console.log(((((shoe * 2) + 5) * 50) - 1984 )+ 1766);
