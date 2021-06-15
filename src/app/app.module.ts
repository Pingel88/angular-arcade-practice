import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { InvadersGameComponent } from './invaders-game/invaders-game.component';
import { BrickBreakerGameComponent } from './brick-breaker-game/brick-breaker-game.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
    InvadersGameComponent,
    BrickBreakerGameComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      { path: 'invaders', component: InvadersGameComponent },
      { path: 'brick-breaker', component: BrickBreakerGameComponent },
      { path: '', redirectTo: 'invaders', pathMatch: 'full' },
      { path: '**', redirectTo: 'invaders', pathMatch: 'full' }

    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
