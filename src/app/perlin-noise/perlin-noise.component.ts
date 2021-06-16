import { Component, OnInit } from '@angular/core';
import Player from './js/player';
import * as p5 from 'p5';

@Component({
  selector: 'p5-perlin-noise',
  templateUrl: './perlin-noise.component.html',
  styleUrls: ['./perlin-noise.component.css']
})
export class PerlinNoiseComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    let player: Player;
    let inc = .01;
    let horizontalSpeed = .05;
    let start = 0;
    new p5(p => {
      p.setup = () => {
        const canvas = p.createCanvas(800, 800);
        // need to place it inside a div so it doesn't create a copy every time
        canvas.parent('game-holder');
        player = new Player(p);
      }
      
      p.draw = () => {
        p.background(51);
        p.stroke(255);
        p.noFill();
        p.beginShape();
        let xOff = start;
        console.log(xOff);
        for (let x = 0; x < p.width; x++) {
          p.stroke(255);
          let y = 0;
          if(Math.floor(xOff) % 5 != 0) {
            y = p.map(p.noise(xOff), 0, 1, p.height / 3, p.height);
          } else {
            let startElevation =  p.map(p.noise(Math.floor(xOff)), 0, 1, p.height / 3, p.height)
            let endElevation = p.map(p.noise(Math.floor(xOff) + 1), 0, 1, p.height / 3, p.height)
            y = (startElevation + endElevation) / 2;
            p.noStroke();
            p.fill(0, 255, 0);
            p.circle(x, y - 2, 3);
            p.noFill();
            p.stroke(255);
          }
          p.vertex(x, y);

          xOff += inc;
        }
        p.endShape();
        player.show();
        player.move();
        // start = player.x - p.width / 2;

        if(player.isMoveRight) {
          start += horizontalSpeed;
        } else if (player.isMoveLeft) {
          start -= horizontalSpeed;
        }
        // start += inc;

        // p.noLoop();
        // p.noStroke();
        //let x = p.random(p.width);
        // let x = p.map(p.noise(xOff1), 0, 1, 0, p.width);
        // let y = p.map(p.noise(xOff2), 0, 1, 0, p.height);

        // xOff1 += 0.01;
        // xOff2 += 0.01;

        // p.ellipse(x, y, 25, 25)
      }
      p.keyPressed = () => {
        if (p.key === 'w') {
          player.setYDir(-1);
        } else if (p.key === 's') {
          player.setYDir(1);
        }
        if (p.key === 'd') {
          player.moveRight();
        } else if (p.key === 'a') {
          player.moveLeft();
        }
      }

      p.keyReleased = () => {
        if (p.key === 'w' || p.key === 's') {
          player.setYDir(0);
        }
        if (p.key === 'd' || p.key ==='a') {
          player.isMoveRight = false;
          player.isMoveLeft = false;
        }
      }
    })
  }
}