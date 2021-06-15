export default function Ball(p) {
  this.isGamePlaying = false;
  this.x = 0;
  this.y = 1000;
  this.diameter = 10;
  this.radius = this.diameter / 2;
  this.speed = 5;
  this.velocity = {
    x: 0,
    y: 0
  }
  
  this.moveAtStart = (playerX, playerY, playerHeight) => {
    if (!this.isGamePlaying) {
      this.x = playerX;
      this.y = playerY - playerHeight / 2  - this.radius;
    }
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

  this.ricochetX = () => {
    this.velocity.x *= -1;
  }

  this.ricochetY = () => {
    this.velocity.y *= -1;
  }

  this.updateVelocity = () => {
    if (!this.isGamePlaying) {
      const angle = (Math.floor(Math.random() * 214159) + 50000) / -100000;
      this.velocity = {
        x: Math.cos(angle),
        y: Math.sin(angle)
      };
    }
  }
}