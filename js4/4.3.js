const readlineSync = require("readline-sync");
let p = readlineSync.question("choose a numer of value? ");

let rand10 = (n) => {
  return Math.floor(Math.random() * 10)  + 1;
}
let multiRand = (n) => {
  var myArray = []
  for (let i = 0; i < n; i++) {
    myArray.push(rand10());
  }
  return myArray
}

console.log(multiRand(p));
