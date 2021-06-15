export default function Ball(p) {
  this.x = p.width / 2;
  this.y = p.height / 2;
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
  }

  this.ricochetX = () => {
    this.velocity.x *= -1;
  }

  this.ricochetY = () => {
    this.velocity.y *= -1;
  }
}