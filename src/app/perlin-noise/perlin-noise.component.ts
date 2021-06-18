import { Component, OnInit } from '@angular/core';
import Player from './js/player';
import Ground from './js/ground';
import LandingPad from './js/landingPad';
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
    let ground: Ground[] = [];
    let landingPads: LandingPad[] = [];
    let inc = .01;
    let horizontalSpeed = .05;
    let start = 0;
    let fpsCounter = 0;
    let fps: string;
    new p5(p => {
      p.setup = () => {
        const canvas = p.createCanvas(800, 800);
        // need to place it inside a div so it doesn't create a copy every time
        canvas.parent('game-holder');
        player = new Player(p);
        p.frameRate(60);
        p.fill("black");
        p.textSize(20);
      }
      
      p.draw = () => {
        if (fpsCounter % 10 === 0) {
          fps = "FPS: " + Math.floor(p.getFrameRate());
        }
        fpsCounter++;
        p.fill(255);
        p.textSize(20);
        ground = [];
        landingPads = [];
        p.background(51);
        p.text(fps, 20, 30)
        p.stroke(255);
        p.noFill();
        p.beginShape();
        let xOff = start;
        for (let x = 0; x < p.width; x++) {
          p.stroke(255);
          let y = 0;
          if(Math.floor(xOff) % 5 != 0) {
            y = p.map(p.noise(xOff), 0, 1, p.height / 3, p.height);
            ground.push(new Ground(p, x, y));
          } else {
            let startElevation =  p.map(p.noise(Math.floor(xOff)), 0, 1, p.height / 3, p.height)
            let endElevation = p.map(p.noise(Math.floor(xOff) + 1), 0, 1, p.height / 3, p.height)
            y = (startElevation + endElevation) / 2;
            landingPads.push(new LandingPad(x, y));
            p.noStroke();
            p.fill(0, 255, 0);
            p.circle(x, y + 2, 3);
            p.noFill();
            p.stroke(255);
          }
          p.vertex(x, y);

          xOff += inc;
        }
        for (let i = 0; i < ground.length; i++) {
          // ground[i].show();
          let distance = p.dist(ground[i].x, ground[i].y, player.x, player.y)
          if (distance < player.radius) {
            player.color = 'red';
          };
        }
        for (let i = 0; i < landingPads.length; i++) {
          let distance = p.dist(landingPads[i].x, landingPads[i].y, player.x, player.y)
          if (distance < player.radius) {
            player.color = 'green';
          };
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