const readlineSync = require("readline-sync");
var firstName = readlineSync.question("what is your first name ?");
var name = readlineSync.question("what is your name ?");
var city = readlineSync.question("where do you live ?");

  console.log("Hello " + firstName + " " + name + " and you live in " + city);
