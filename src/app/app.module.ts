import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HeroBirthdayComponent1 } from './hero-birthday1.component';
import { HeroBirthdayComponent2 } from './hero-birthday2.component';
import { PowerBoosterComponent } from './power-booster.component';
import { PowerBoostCalculatorComponent } from './power-boost-calculator.component';
import { ExponentialStrengthPipe } from './exponential-strength.pipe';
import { FlyingHeroesComponent, FlyingHeroesImpureComponent } from './flying-heroes.component';
import { FlyingHeroesPipe, FlyingHeroesImpurePipe } from './flying-heroes.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HeroBirthdayComponent1,
    HeroBirthdayComponent2,
    PowerBoosterComponent,
    PowerBoostCalculatorComponent,
    ExponentialStrengthPipe,
    FlyingHeroesComponent,
    FlyingHeroesImpureComponent,
    FlyingHeroesPipe,
    FlyingHeroesImpurePipe
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
