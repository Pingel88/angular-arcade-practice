import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BrickBreakerGameComponent } from './brick-breaker-game.component';

describe('BrickBreakerGameComponent', () => {
  let component: BrickBreakerGameComponent;
  let fixture: ComponentFixture<BrickBreakerGameComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BrickBreakerGameComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BrickBreakerGameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
