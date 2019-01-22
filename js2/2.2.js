const readlineSync = require("readline-sync");
let min =  readlineSync.question("What is your min ?" );
let max =  readlineSync.question("What is your max ?" );
let current =  readlineSync.question("What is your current ?" );
if ((current < max) || (current > min)) {
  console.log(current + " ou are right");
}
else if (min > max) {
  console.log("stupido get out of this software");
}
