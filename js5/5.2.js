const readlineSync = require("readline-sync");

function askTvSerie() {

  let actorNames = 1;
  let i = 0;

    let serieObject = {
      mySerie : "",
      productYear : "",
      actors : [],
    }

      serieObject.mySerie =  readlineSync.question('Can you give me your favorite serie name please? ');
      serieObject.productYear = readlineSync.question('Can you give me the year of production please? ');

      while (parseInt(actorNames) !== 0) {
        actorNames = readlineSync.question('Can you give me a name of actors please ? (0 = exit)');
        if (parseInt(actorNames) !== 0) {
          serieObject.actors[i] = actorNames
          i++;
        }
      }
    return serieObject;
}
myobj = askTvSerie()

function shuffle(array) {
  var currentIndex = array.length, tempvalue, randomIndex;

  while (0 !== currentIndex) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    tempvalue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = tempvalue;
  }
  return array;
}

shuffle(myobj.actors);
console.log(myobj);
