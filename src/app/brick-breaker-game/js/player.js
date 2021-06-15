export default function Player(p) {
  this.x = p.width/2;
  this.y = p.height-60;
  this.width = 120;
  this.height = 10;

  this.show = function() {
    p.fill(255);
    p.rectMode(p.CENTER);
    p.rect(this.x, this.y, this.width, this.height);
  }

  this.move = () => {
    if (p.mouseX > this.width/2 && p.mouseX < p.width - this.width/2) {
      this.x = p.mouseX;
    }
    if (p.mouseX < this.width/2) {
      this.x = this.width/2;
    }
    if (p.mouseX > p.width-this.width/2) {
      this.x = p.width-this.width/2;
    }
  }
}