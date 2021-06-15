export default function Player(p) {
  this.x = p.width/2;

  this.show = function() {
    p.fill(255);
    p.rectMode(p.CENTER);
    p.rect(this.x, p.height-60, 120, 10);
  }
}