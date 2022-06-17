import { Component, inject } from '@angular/core';
import { GREETING } from './app.module';

@Component({
  selector: 'bar',
  template: `<h1>Bar component says {{ greeting }}</h1>`,
})
export class BarComponent {
  greeting = inject(GREETING);
}
