export default function Player(p) {
  this.x = p.width/2;
  this.playerWidth = 120

  this.show = function() {
    p.fill(255);
    p.rectMode(p.CENTER);
    p.rect(this.x, p.height-60, this.playerWidth, 10);
  }

  this.move = () => {
    if (p.mouseX > this.playerWidth/2 && p.mouseX < p.width - this.playerWidth/2) {
      this.x = p.mouseX;
    }
    if (p.mouseX < this.playerWidth/2) {
      this.x = this.playerWidth/2;
    }
    if (p.mouseX > p.width-this.playerWidth/2) {
      this.x = p.width-this.playerWidth/2;
    }
  }
}