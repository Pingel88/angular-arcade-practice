import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { InvadersGameComponent } from './invaders-game/invaders-game.component';

@NgModule({
  declarations: [
    AppComponent,
    InvadersGameComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
