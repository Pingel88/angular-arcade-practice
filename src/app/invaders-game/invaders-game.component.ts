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

  ngOnInit(): void {
    let ship: Ship;
    let flowers: Flower[] = [];
    let drops: Drop[] = [];
    new p5(p => {
      p.setup = () => {
        const canvas = p.createCanvas(600, 400);
        // need to place it inside a div so it doesn't create a copy every time
        canvas.parent('game-holder');
        ship = new Ship(p);
        // drop = new Drop(p, p.width/2, p.height/2);
        for (let i = 0; i < 6; i++) {
          flowers[i] = new Flower(p, i*80+80, 60);
        }
      }

      p.draw = () => {
        p.background(51);
        // show player
        ship.show();
        ship.move();
        // animate flowers
        let edge = false;
        for (let i = 0; i < flowers.length; i++) {
          flowers[i].show();
          flowers[i].move();
          if (flowers[i].x + flowers[i].r > p.width || flowers[i].x - flowers[i].r < 0) {
            edge = true;
          }
        }
        if (edge) {
          for (let i = 0; i < flowers.length; i++) {
            flowers[i].shiftDown();
          }
        }
        // animate drops
        for (let i = 0; i < drops.length; i++) {
          drops[i].show();
          drops[i].move();
          // check for intersection with flowers
          for (let j = 0; j < flowers.length; j++) {
            if (drops[i].hits(flowers[j])) {
              flowers[j].grow();
              drops[i].evaporate();
            }
          }
        }
        // remove drops when intersecting with flowers
        for (let i = drops.length-1; i >= 0; i--) {
          if (drops[i].toDelete) {
            drops.splice(i, 1);
          }
        }
      }

      p.keyReleased = () => {
        if (p.key != ' ') {
          ship.setDir(0);
        }
      }

      p.keyPressed = () => {
        if (p.keyCode === p.RIGHT_ARROW) {
          ship.setDir(1);
        } else if (p.keyCode === p.LEFT_ARROW) {
          ship.setDir(-1);
        }
        
        if (p.key === ' ') {
          const drop = new Drop(p, ship.x, p.height)
          drops.push(drop)
        }
      }
    })
  }
}