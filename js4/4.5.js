const readlineSync = require("readline-sync");
var x = parseInt(readlineSync.question("enter a number for x ?"));
var y = parseInt(readlineSync.question("enter a number for y ?"));
var x1 = parseInt(readlineSync.question("enter a number for x1 ?"));
var y1 = parseInt(readlineSync.question("enter a number for y1 ?"));



function calcDistance(x,y) {
    this.x = x;
    this.y = y;
    this.x1 = x1;
    this.y1 = y1;


    this.distanceTo = function (point)
    {
        var distance = Math.sqrt((Math.pow(point.x1-this.x,2))+(Math.pow(point.y1-this.y,2)))
        return distance;
    };
}

var a = new calcDistance (x,y);
var b = new calcDistance (x1,y1);

console.log(parseInt(a.distanceTo(b)));
