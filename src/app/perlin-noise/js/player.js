export default function Player(p) {
  this.x = p.width/2;
  this.y = 50;
  this.yDir = 0;
  this.isMoveRight = false;
  this.isMoveLeft = false;
  this.diameter = 20;
  this.radius = this.diameter / 2;
  this.color = "white";

  this.show = function() {
    p.fill(this.color);
    p.noStroke();
    p.ellipse(this.x, this.y, this.diameter, this.diameter)
  }

  this.setXDir = function(dir) {
    this.xDir = dir;
  }
  this.setYDir = function(dir) {
    this.yDir = dir;
  }

  this.move = function() {
    this.y += this.yDir*5;
  }

  this.moveRight = () => {
    this.isMoveRight = true;
    this.isMoveLeft = false;
  }

  this.moveLeft = () => {
    this.isMoveLeft = true;
    this.isMoveRight = false;
  }
}

