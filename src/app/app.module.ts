import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { InvadersGameComponent } from './invaders-game/invaders-game.component';
import { BrickBreakersGameComponent } from './brick-breakers-game/brick-breakers-game.component';

@NgModule({
  declarations: [
    AppComponent,
    InvadersGameComponent,
    BrickBreakersGameComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
