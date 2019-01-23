const readlineSync = require("readline-sync");
let p = readlineSync.question("choose a numer of value? ");

let average = (arr) => {
  let sum = 0;
    for (let i = 0; i < arr.length; i++) {
      sum += arr[i];
    }
    return sum / arr.length ;
}
let min = (arr) => {
  return Math.min(...arr);
}

let max = (arr) => {
  return Math.max(...arr);
}


let rand10 = (n) => {
  return Math.floor(Math.random() * 10)  + 1;
}

let multiRand = (n) => {
  var arr = []
  for (let i = 0; i < n; i++) {
    arr.push(rand10());
  }
  return arr;
}

let arr = multiRand(p);
console.log(arr);
console.log(average(arr));
console.log(min(arr));
console.log(max(arr));




//let multiRand();
