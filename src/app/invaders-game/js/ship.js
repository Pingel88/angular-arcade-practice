export default function Ship(p) {
  this.x = p.width/2;

  this.show = function() {
    p.fill(255)
    p.rectMode(p.CENTER);
    p.rect(this.x, p.height-20, 20, 60)
  }

  this.move = function(dir) {
    this.x += dir*5;
  }
}

