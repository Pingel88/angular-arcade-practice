import { Component, OnInit } from '@angular/core';
import * as p5 from 'p5';

@Component({
  selector: 'p5-brick-breaker-game',
  templateUrl: './brick-breaker-game.component.html',
  styleUrls: ['./brick-breaker-game.component.css']
})
export class BrickBreakerGameComponent implements OnInit {

  ngOnInit(): void {
    new p5(p => {
      p.setup = () => {
        const canvas = p.createCanvas(1000, 900);
        canvas.parent('game-holder');
      }

      p.draw = () => {
        p.background(51);
      }
    })
  }

}
