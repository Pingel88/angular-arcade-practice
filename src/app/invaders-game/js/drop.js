export default function Drop(p, x, y) {
  this.x = x;
  this.y = y;
  this.r = 8;
  this.toDelete = false;

  this.show = function() {
    p.noStroke();
    p.fill(150, 0, 200)
    p.ellipse(this.x, this.y, this.r*2, this.r*2)
  }

  this.evaporate = function() {
    this.toDelete = true;
  }

  this.hits = function(flower) {
    let d = p.dist(this.x, this.y, flower.x, flower.y);
    if (d < this.r + flower.r) {
      return true;
    } else {
      return false;
    }
  }

  this.move = function() {
    this.y = this.y - 5;
  }
}

