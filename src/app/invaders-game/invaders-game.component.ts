import { Component, OnInit } from '@angular/core';
import Ship from './js/ship';
import Flower from './js/flower';
import Drop from './js/drop';
import * as p5 from 'p5';

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
    let drops: Drop[] = [];
    new p5(p => {
      p.setup = () => {
        p.createCanvas(600, 400);
        ship = new Ship(p);
        // drop = new Drop(p, p.width/2, p.height/2);
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
        for (let i = 0; i < drops.length; i++) {
          drops[i].show();
          drops[i].move();
          for (let j = 0; j < flowers.length; j++) {
            if (drops[i].hits(flowers[j])) {
              flowers[j].grow();
              drops[i].evaporate();
              console.log('watering!');
            }
          }
        }
        for (let i = drops.length-1; i >= 0; i--) {
          if (drops[i].toDelete) {
            drops.splice(i, 1);
          }
        }
      }

      p.keyPressed = () => {
        if (p.keyCode === p.RIGHT_ARROW) {
          ship.move(1);
        } else if (p.keyCode === p.LEFT_ARROW) {
          ship.move(-1);
        }
        
        if (p.key === ' ') {
          const drop = new Drop(p, ship.x, p.height)
          drops.push(drop)
        }
      }
    })
  }
}