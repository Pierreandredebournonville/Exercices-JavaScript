const readlineSync = require("readline-sync");
var nb = readlineSync.question("send us a number between 1 and 7, please ? ");

var day = ["Lundi","Mardi","Mercredi","Jeudi","Vendredi","Samedi","Dimanche"];

while (nb > 7 || nb <=0) {
  console.log("Error, enter a right value ");
  nb = readlineSync.question("send us a number between 1 and 7, please ? ");
}
  console.log(day[nb-1]);
