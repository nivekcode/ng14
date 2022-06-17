import {Component} from "@angular/core";

@Component({
  selector: 'lazy-loaded-component',
  template: `<h1>Hy, I am lazy loaded</h1>`,
  standalone: true
})
export class LazyLoadedComponent {}
