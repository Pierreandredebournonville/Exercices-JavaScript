const readlineSync = require("readline-sync");
let age =  readlineSync.question("What is your age ?" );
 if (age >= 18) {
  console.log("you are an adult");
}
  else {
    console.log("You are not yet an adult");
  }
