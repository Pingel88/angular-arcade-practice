export default function Ground(p, x, y) {
  this.x = x;
  this.y = y;

  this.show = function() {
    p.point(this.x, this.y);
  }
}