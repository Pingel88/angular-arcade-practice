import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InvadersGameComponent } from './invaders-game.component';

describe('InvadersGameComponent', () => {
  let component: InvadersGameComponent;
  let fixture: ComponentFixture<InvadersGameComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InvadersGameComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InvadersGameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
