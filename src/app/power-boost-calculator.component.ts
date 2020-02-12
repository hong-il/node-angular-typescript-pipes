import { Component } from '@angular/core';

@Component({
  selector: 'app-power-boost-calculator',
  template: `
            <h2>Power Boost Calculator</h2>
            <p>Normal power: <input [(ngModel)]="power"></p>
            <p>Boost factor: <input [(ngModel)]="factor"></p>
            <p>
                Super Hero Power: {{power | exponentialStrength: factor}}
            </p>
            `
})
export class PowerBoostCalculatorComponent {
  power = 5;
  factor = 1;
}
