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

 function numberAl = () => { // declare la fonction dans laquelle les variables vont etre utiliser et la boucle faite
 let result = Math.floor(Math.random() * Math.floor(100));// genere le nombre aléatoire
 let userResult //declarer la variable en dehors pour pouvoir l'utiliser dedans

 do {
   userResult = readlineSync.question("Guess the number");//pose la question
   if (result > userResult) { // fait la comparaison
     console.log("too High");
   } else if (result < userResult) {
     console.log("too Low");
   } else {
     console.log("you win");
   }
 } while (result != userResult); //ferme la boucle avec la condition

 }
 numberAl(); //appelle la fonction
