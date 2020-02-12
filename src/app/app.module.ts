import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeroBirthdayComponent1 } from './hero-birthday1.component';
import { HeroBirthdayComponent2 } from './hero-birthday2.component';

@NgModule({
  declarations: [
    AppComponent,
    HeroBirthdayComponent1,
    HeroBirthdayComponent2
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
