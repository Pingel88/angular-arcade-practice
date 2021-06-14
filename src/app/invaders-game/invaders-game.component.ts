import { Component, OnInit } from '@angular/core';
import Ship from './js/ship';
import Flower from './js/flower';
import * as p5 from 'p5';
// declare const Ship:any;

@Component({
  selector: 'p5-invaders-game',
  templateUrl: './invaders-game.component.html',
  styleUrls: ['./invaders-game.component.css']
})
export class InvadersGameComponent implements OnInit {
  canvasWidth = 600;
  canvasHeight = 400;
  // sw = 2;
  // c = [];
  // strokeColor = 0;

  constructor() {}

  ngOnInit() {
    let ship: Ship;
    let flowers: Flower[] = [];
    new p5(p => {
      p.setup = () => {
        p.createCanvas(600, 400);
        ship = new Ship(p);
        console.log(flowers);
        for (let i = 0; i < 6; i++) {
          flowers[i] = new Flower(p, i*80+80, 60);
        }
      }

      p.draw = () => {
        p.background(51);
        // p.rect(10,10,50,50)
        ship.show();
        for (let i = 0; i < flowers.length; i++) {
          flowers[i].show();
        }
      }

      p.keyPressed = () => {
        if (p.keyCode === p.RIGHT_ARROW) {
          ship.move(1);
        } else if (p.keyCode === p.LEFT_ARROW) {
          ship.move(-1);
        }
      }
    })
    // this sketch was modified from the original
    // https://editor.p5js.org/Janglee123/sketches/HJ2RnrQzN
    // const sketch = s => {
    //   s.setup = () => {
    //     let canvas2 = s.createCanvas(s.windowWidth - 200, s.windowHeight - 200);
    //     // creating a reference to the div here positions it so you can put things above and below
    //     // where the sketch is displayed
    //     canvas2.parent('sketch-holder');

    //     s.background(255);
    //     s.strokeWeight(this.sw);

    //     this.c[0] = s.color(148, 0, 211);
    //     this.c[1] = s.color(75, 0, 130);
    //     this.c[2] = s.color(0, 0, 255);
    //     this.c[3] = s.color(0, 255, 0);
    //     this.c[4] = s.color(255, 255, 0);
    //     this.c[5] = s.color(255, 127, 0);
    //     this.c[6] = s.color(255, 0, 0);

    //     s.rect(0, 0, s.width, s.height);

    //     s.stroke(this.c[this.strokeColor]);
    //   };

    //   s.draw = () => {
    //     if (s.mouseIsPressed) {
    //       if (s.mouseButton === s.LEFT) {
    //         s.line(s.mouseX, s.mouseY, s.pmouseX, s.pmouseY);
    //       } else if (s.mouseButton === s.CENTER) {
    //         s.background(255);
    //       }
    //     }
    //   };

    //   s.mouseReleased = () => {
    //     // modulo math forces the color to swap through the array provided
    //     this.strokeColor = (this.strokeColor + 1) % this.c.length;
    //     s.stroke(this.c[this.strokeColor]);
    //     console.log(`color is now ${this.c[this.strokeColor]}`);
    //   };

    //   s.keyPressed = () => {
    //     if (s.key === 'c') {
    //       window.location.reload();
    //     }
    //   };
    // };

    // this.canvas = new p5(sketch);
  }
}