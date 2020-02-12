import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeroBirthdayComponent1 } from './hero-birthday1.component';

@NgModule({
  declarations: [
    AppComponent,
    HeroBirthdayComponent1
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
