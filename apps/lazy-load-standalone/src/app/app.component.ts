import { Component, ViewContainerRef } from '@angular/core';

@Component({
  selector: 'ng14-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  constructor(private vcr: ViewContainerRef) {}

  renderIt() {
    import('./lazy-loaded.component').then((c) => {
      this.vcr.createComponent(c.LazyLoadedComponent);
    });
  }
}
