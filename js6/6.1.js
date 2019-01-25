/*Exercise 6.1
Create a class named Circle with attributes xPos, yPos and radius.
Add a method named move(xOffset, yOffset) that will adjust the position of the circle.
Add a getter accessor named surface that will return the surface of the circle.

Test its method and accessors by modifying the values and checking if everything is consistent.*/

class circle {
  constructor(xPos, yPos, radius) {
    this.xPos = xPos;
    this.yPos = yPos;
    this.radius = radius;
  }
  move(xOffset, yOffset) {
    this.xPos = xOffset + this.xPos;
    this.yPos = yOffset + this.yPos;

  }
  get surface() {
   return this.calcArea();
  }
  calcArea() {
    return Math.PI * this.radius * this.radius;
  }
}
var circle1 = new circle(6, 8, 5);


console.log(circle1.surface);
circle1.move(5, 3);
console.log(circle1.xPos);
console.log(circle1.yPos);
