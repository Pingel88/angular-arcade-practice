export default function Player(p, x, y, width, height) {
  this.x = x;
  this.y = y;
  this.width = width;
  this.height = height;

  this.show = function() {
    p.fill(255);
    p.rectMode(p.CENTER);
    p.rect(this.x, this.y, this.width, this.height);
  }
}