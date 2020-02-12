import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HeroBirthdayComponent1 } from './hero-birthday1.component';
import { HeroBirthdayComponent2 } from './hero-birthday2.component';
import { PowerBoosterComponent } from './power-booster.component';
import { PowerBoostCalculatorComponent } from './power-boost-calculator.component';
import { ExponentialStrengthPipe } from './exponential-strength.pipe';
import { FlyingHeroesComponent } from './flying-heroes.component';

@NgModule({
  declarations: [
    AppComponent,
    HeroBirthdayComponent1,
    HeroBirthdayComponent2,
    PowerBoosterComponent,
    PowerBoostCalculatorComponent,
    ExponentialStrengthPipe,
    FlyingHeroesComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
