import { Component } from '@angular/core';

import { HEROES } from './heroes';

@Component({
  selector: 'app-flying-heroes',
  templateUrl: './flying-heroes.component.html',
  styles: ['#flyers, #all {font-style: italic}']
})
export class FlyingHeroesComponent {
    heroes: any[] = [];
    canFly = true;
    constructor() { this.reset(); }
  
    addHero(name: string) {
      name = name.trim();
      if (!name) { return; }
      let hero = {name, canFly: this.canFly};
      this.heroes.push(hero);
    }
  
    reset() { this.heroes = HEROES.slice(); }
}