const readlineSync = require("readline-sync");
let n = readlineSync.question("Send us a number, please ");
let nb = 0;

for (n; n > 0; n-- ) {
  nb += parseInt(readlineSync.question("Enter a number?"));
}
console.log(nb);
