const readlineSync = require("readline-sync");
let l = parseInt(readlineSync.question("What is the length of your rectangle? "));
let w = parseInt(readlineSync.question("What is the width of your rectangle? "));


let calcSurface = (l, w) => {
  return l * w
}
console.log(calcSurface(l, w));
