export default function Ball(p) {
  this.x = p.width/2;
  this.y = p.height/2;
  this.radius = 10;
  this.speed = 3;
  this.velocity = {
    x: 1,
    y: 1
  }

  this.show = () => {
    p.fill(255);
    p.circle(this.x, this.y, this.radius);
  }

  this.move = () => {
    this.x += this.velocity.x * this.speed;
    this.y += this.velocity.y * this.speed;

    if (this.x < 0 + this.radius || this.x > p.width-this.radius) {
      this.velocity.x *= -1;
    }
    if (this.y < 0 + this.radius || this.y > p.height-this.radius) {
      this.velocity.y *= -1;
    }
  }
}