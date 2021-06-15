import { Component, OnInit } from '@angular/core';
import Player from './js/player';
import Ball from './js/ball';
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
    new p5(p => {
      p.setup = () => {
        const canvas = p.createCanvas(1000, 900);
        canvas.parent('game-holder');
        player = new Player(p);
        ball = new Ball(p);
      }

      p.draw = () => {
        p.background(51);
        player.show();
        player.move();
        ball.show();
        ball.move();

        // checks for ball encounters with wall
        if (ball.x < 0 + ball.radius || ball.x > p.width-ball.radius) {
          ball.ricochetX();
        }
        if (ball.y < 0 + ball.radius || ball.y > p.height-ball.radius) {
          ball.ricochetY();
        }

        // checks for ball encounters with player
        if (ball.y+ball.radius > player.y-player.height/2 && ball.y-ball.radius < player.y+player.height/2 && ball.x > player.x - player.width/2 && ball.x < player.x + player.width/2) {
          ball.ricochetY();
        }
        if (ball.x+ball.radius > player.x-player.width/2 && ball.x-ball.radius < player.x+player.width/2 && ball.y > player.y - player.height/2 && ball.y < player.y + player.height/2) {
          ball.ricochetX();
          // prevent ball from getting stuck inside player paddle
          if (ball.x < player.x) {
            ball.x = player.x-player.width/2-ball.radius;
          } else {
            ball.x = player.x+player.width/2+ball.radius;
          }
        }

      }
    })
  }

}
