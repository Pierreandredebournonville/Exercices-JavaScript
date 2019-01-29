/*
Exercise 7.1 - Number Guesser
Make a program that generates an integer
between 1 and 100 (don't display it to the user).

Then the program should display "Guess the number" and ask the
user to guess. If the user enters a number which is too low
it should display "Too low" and re-ask the question.
If the user enters a number which is too high it should display "Too high"
 and re-ask the question. If the user guess correctly it should
  display "Well guessed!" and exit.

Créez un programme qui génère un entier compris entre 1 et 100
(ne l’affichez pas à l’utilisateur).

Ensuite, le programme devrait afficher "Devinez le numéro" et demander à
l'utilisateur de deviner. Si l'utilisateur entre un nombre trop bas,
il doit afficher "Trop bas" et poser à nouveau la question.
Si l'utilisateur entre un nombre trop élevé, il doit afficher "Trop élevé"
et poser à nouveau la question. Si l'utilisateur devine correctement,
 il devrait afficher "Bien deviné!" et sortir. */

const readlineSync = require("readline-sync");

function getRandomNumb() {
  return Math.floor(Math.random() * Math.floor(100));
}
getRandomNumb();

let askUser = parseInt(readlineSync.question("Guess the number ? "));
do {
    if(getRandomNumb < askUser) {
      console.log("too low");
    }else if(getRandomNumb > askUser) {
      console.log("Too High");
    }
}  while(askUser != getRandomNumb);
