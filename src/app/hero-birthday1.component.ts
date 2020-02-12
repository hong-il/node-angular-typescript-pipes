import { Component } from '@angular/core';

@Component({
  selector: 'app-hero-birthday1',
  template: `<p>The hero's birthday is {{ birthday | date }}</p>`
})
export class HeroBirthdayComponent1 {
  birthday = new Date(1993, 0, 17);
}
