export default function Flower(p, x, y) {
  this.x = x;
  this.y = y;
  this.r = 30;

  this.show = function() {
    p.fill(255, 0, 200);
    p.ellipse(this.x, this.y, this.r*2, this.r*2);
  }
}

