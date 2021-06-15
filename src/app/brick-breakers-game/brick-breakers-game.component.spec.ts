import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BrickBreakersGameComponent } from './brick-breakers-game.component';

describe('BrickBreakersGameComponent', () => {
  let component: BrickBreakersGameComponent;
  let fixture: ComponentFixture<BrickBreakersGameComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BrickBreakersGameComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BrickBreakersGameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
