export default function Ball(p) {
  this.isGamePlaying = false;
  this.x = p.width / 2;
  this.y = p.height / 2;
  this.diameter = 10;
  this.radius = this.diameter / 2;
  this.speed = 5;
  this.velocity = {
    x: 1,
    y: 1
  }

  this.show = () => {
    p.fill(255);
    p.circle(this.x, this.y, this.diameter);
  }

  this.move = () => {
    if (this.isGamePlaying) {
      this.x += this.velocity.x * this.speed;
      this.y += this.velocity.y * this.speed;
    }
  }

  this.moveAtStart = (playerX, playerY, playerHeight) => {
    if (!this.isGamePlaying) {
      this.x = playerX;
      this.y = playerY - playerHeight / 2  - this.radius;
      console.log(playerY, playerHeight, this.y);
    }
  }

  this.ricochetX = () => {
    this.velocity.x *= -1;
  }

  this.ricochetY = () => {
    this.velocity.y *= -1;
  }
}