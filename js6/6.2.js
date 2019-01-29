class Rectangle {
  constructor(topLeftXPos, topLeftYPos, height, width) {
    this.topLeftXPos = topLeftXPos;
    this.topLeftYPos = topLeftYPos;
    this.height = height;
    this.width = width;
    this.bottomLeftYPos = this.topLeftYPos - this.height
    this.bottomRightXPos = this.bottomLeftYPos + this.with

  }
  //collides(otherRectangle) {



  }

}
var rect1 = new Rectangle(10, 5, 12, 11);
var rect2 = new Rectangle(11, 6, 12, 10);
console.log(rect1.bottomRightXPos);
