export default function Player(p, x, y, width, height) {
  this.x = x;
  this.y = y;
  this.width = width;
  this.height = height;
  this.r = p.random(255);
  this.g = p.random(255);
  this.b = p.random(255);

  this.show = function() {
    p.stroke(255);
    p.strokeWeight(4);
    p.fill(this.r, this.g, this.b);
    p.rectMode(p.CENTER);
    p.rect(this.x, this.y, this.width, this.height);
  }
}