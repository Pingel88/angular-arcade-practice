export default function Ship(p) {
  this.x = p.width/2;
  this.xdir = 0;

  this.show = function() {
    p.fill(255)
    p.rectMode(p.CENTER);
    p.rect(this.x, p.height-20, 20, 60)
  }

  this.setDir = function(dir) {
    this.xdir = dir;
  }

  this.move = function() {
    this.x += this.xdir*5;
  }
}

