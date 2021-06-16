import { Component, OnInit } from '@angular/core';
import Player from './js/player';
import Ball from './js/ball';
import Brick from './js/brick';
import * as p5 from 'p5';

@Component({
  selector: 'p5-brick-breaker-game',
  templateUrl: './brick-breaker-game.component.html',
  styleUrls: ['./brick-breaker-game.component.css']
})
export class BrickBreakerGameComponent implements OnInit {

  ngOnInit(): void {
    let player: Player;
    let ball: Ball;
    let bricks: Brick[] = [];
    let rows = 15;
    let bricksInRow = 4;
    let brickWidth = 200;
    let brickHeight = 40;
    // number of pixels inside a brick to check which wall the ball hit
    let brickWallCheck = 5;

    new p5(p => {
      p.setup = () => {
        const canvas = p.createCanvas(1000, 900);
        canvas.parent('game-holder');
        // increased framerate to speed up game and decrease clipping bugs
        p.frameRate(144);
        player = new Player(p);
        ball = new Ball(p);
        // top of bricks
        let brickYCounter = 60;
        for (let i = 1; i <= rows; i++) {
          let brickXCounter = p.width / 2 - ( bricksInRow / 2 * brickWidth ) + brickWidth / 2;
          for (let j = 1; j <= bricksInRow; j++) {
            bricks.push(new Brick(p, brickXCounter, brickYCounter, brickWidth, brickHeight));
            brickXCounter += brickWidth;
          }
          brickYCounter += brickHeight;
        }
      }
      
      p.draw = () => {
        p.background(51);
        player.show();
        player.move();
        ball.show();
        ball.move();
        ball.moveAtStart(player.x, player.y, player.height);
        for (let i = 0; i < bricks.length; i++){
          bricks[i].show();
        }

        // side wall encounter check
        if (ball.x < 0 + ball.radius || ball.x > p.width-ball.radius) {
          ball.ricochetX();
          // prevent ball from being forced outside of the canvas
          if (ball.x > p.width - ball.radius) {
            ball.x = p.width - ball.radius;
          } else if (ball.x < 0 + ball.radius) {
            ball.x = 0 + ball.radius;
          }
        }
        // top wall encounter check
        if (ball.y < 0 + ball.radius) {
          ball.ricochetY();
          // prevent ball from being forced outside of the canvas
          if (ball.y < 0 + ball.radius) {
            ball.y = 0+ball.radius;
          }
        }
        // bottom wall encounter check and resets game
        if (ball.y > p.height-ball.radius) {
          ball.isGamePlaying = false;
        }
        // checks for ball encounters with player
        if (ball.y + ball.radius > player.y - player.height / 2 && ball.y - ball.radius < player.y + player.height / 2 && ball.x > player.x - player.width / 2 && ball.x < player.x + player.width / 2) {
          ball.ricochetY();
        }
        if (ball.x + ball.radius > player.x - player.width / 2 && ball.x-ball.radius < player.x + player.width / 2 && ball.y > player.y - player.height / 2 && ball.y < player.y + player.height / 2) {
          ball.ricochetX();
          // prevent ball from getting stuck inside player paddle
          if (ball.x < player.x) {
            ball.x = player.x - player.width / 2 - ball.radius;
          } else {
            ball.x = player.x + player.width /2 + ball.radius;
          }
        }
        // checks for ball encountering brick
        for (let i = bricks.length - 1; i >= 0; i--) {
          if (
            ball.y - ball.radius < bricks[i].y + bricks[i].height / 2 && 
            ball.y + ball.radius > bricks[i].y - bricks[i].height / 2 &&
            ball.x + ball.radius > bricks[i].x - bricks[i].width / 2 && 
            ball.x - ball.radius < bricks[i].x + bricks[i].width / 2) {
              // check edge ball hit
              if (
                // if ball entered top of brick
                (ball.y + ball.radius < bricks[i].y - bricks[i].height / 2 + brickWallCheck &&
                ball.y + ball.radius > bricks[i].y - bricks[i].height / 2 - brickWallCheck) ||
                // or if ball entered bottom of brick
                (ball.y - ball.radius > bricks[i].y + bricks[i].height / 2 - brickWallCheck &&
                ball.y - ball.radius < bricks[i].y + bricks[i].height / 2 + brickWallCheck)) {
                  ball.ricochetY();
              } else if (
                // if ball entered left of brick
                (ball.x + ball.radius < bricks[i].x - bricks[i].width / 2 + brickWallCheck &&
                ball.x + ball.radius > bricks[i].x - bricks[i].width / 2 - brickWallCheck) ||
                // or if ball entered right of brick
                (ball.x - ball.radius > bricks[i].x + bricks[i].width / 2 - brickWallCheck &&
                ball.x - ball.radius < bricks[i].x + bricks[i].width / 2 + brickWallCheck)) {
                  ball.ricochetX();
              }
              bricks.splice(i, 1);
          }
        } 
      }

      p.mouseClicked = () => {
        ball.updateVelocity();
        ball.isGamePlaying = true;
      }
    })
  }

}
