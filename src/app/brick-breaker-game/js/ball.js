export default function Ball(p) {
  this.x = p.width/2;
  this.y = p.height/2;

  this.show = () => {
    p.fill(255);
    p.circle(this.x, this.y, 10);
  }
}