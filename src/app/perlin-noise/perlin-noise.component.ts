import { Component, OnInit } from '@angular/core';
import * as p5 from 'p5';

@Component({
  selector: 'p5-perlin-noise',
  templateUrl: './perlin-noise.component.html',
  styleUrls: ['./perlin-noise.component.css']
})
export class PerlinNoiseComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    let xOff = 0;
    new p5(p => {
      p.setup = () => {
        const canvas = p.createCanvas(400, 400);
        // need to place it inside a div so it doesn't create a copy every time
        canvas.parent('game-holder');
      }

      p.draw = () => {
        p.background(51);
        //let x = p.random(p.width);
        let x = p.map(p.noise(xOff), 0, 1, 0, p.width);

        xOff += 0.01;

        p.ellipse(x, 200, 24, 24)
      }
    })
  }
}