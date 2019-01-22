let values = [1, 2, 3, 4, 5];
let sum = values.reduce((previous, current) => current += previous);
let avg = sum / values.length;

console.log(avg);


let valuesN = [100, 101, 102];
let count = valuesN.reduce((previous, current) => current += previous);
let avgi = count / valuesN.length;

console.log(avgi);
