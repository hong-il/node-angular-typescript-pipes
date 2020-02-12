import { Component } from '@angular/core';

@Component({
  selector: 'app-hero-birthday2',
  template: `
            <p>The hero's birthday is {{ birthday | date:format }}</p>
            <button (click)="toggleFormat()">Toggle Format</button>
            `
})
export class HeroBirthdayComponent2 {
  birthday = new Date(1993, 0, 17);
  toggle = true;

  get format() { return this.toggle ? 'shortDate' : 'fullDate' }
  toggleFormat() { this.toggle = !this.toggle }
}
