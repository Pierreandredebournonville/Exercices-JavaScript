class Rectangle {
  constructor(topLeftXPos, topLeftYPos, height, width) {
    this.topLeftXPos = topLeftXPos;
    this.topLeftYPos = topLeftYPos;
    this.height = height;
    this.width = width;
  }
  collise(otherRectangle) {
    if (this.topLeftXPos < otherRectangle.topLeftXPos + otherRectangle.width &&
     this.topLeftXPos+ this.width > otherRectangle.topLeftXPos &&
     this.topLeftYPos < otherRectangle.topLeftYPos + otherRectangle.height &&
     this.height + this.topLeftYPos > otherRectangle.topLeftYPos) {
        return true;
    } else {
      return false;
    }  // collision détectée !
  }
}
var rect1 = new Rectangle(5, 10, 5, 7);
var rect2 = new Rectangle(4, 9, 4, 7).collise(rect1);
console.log(rect2);
