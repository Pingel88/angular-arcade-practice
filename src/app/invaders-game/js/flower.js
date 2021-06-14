export default function Flower(p, x, y) {
  this.x = x;
  this.y = y;

  this.show = function() {
    p.fill(255, 0, 200)
    p.ellipse(this.x, this.y, 60, 60)
  }
}

